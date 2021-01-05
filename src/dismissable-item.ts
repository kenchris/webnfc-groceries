import { LitElement, html, css, customElement } from 'lit-element';
import { style as listStyle } from './mwc-list-item-css';

const kMinFlingVelocityValue = 0.4;
const kTouchSlopValue = 5;

class VelocityTracker {
  #history: Array<{ x: number, timeStamp: number }> = [];
  #timeWindow: number = 50;

  _pruneHistory(timeStamp: number) {
    const index = this.#history.findIndex(touch => {
      return touch.timeStamp > timeStamp - this.#timeWindow;
    });
    this.#history.splice(0, index + 1);
  }

  update(x: number, timeStamp: number) {
    this._pruneHistory(timeStamp);

    this.#history.push({ x, timeStamp });

    const oldestTouchMove = this.#history[0];

    const deltaX = x - oldestTouchMove.x;
    const deltaT = timeStamp - oldestTouchMove.timeStamp;

    return {velocityX: (deltaT > 0) ? deltaX / deltaT : 0};
  }
}

@customElement('dismissable-item')
export class DismissableItem extends LitElement {
  static styles = [
    listStyle,
    css`
      :host {
        overflow: hidden;
      }
      #contentWrapper {
        contain: content;
        will-change: transform, opacity;
        background-color: var(--item-bg-color);
        width: 100%;
        height: 100%;
      }
    `
  ];

  render() {
    return html`
      <div id="contentWrapper" class="mdc-list-item">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.wrapper = this.shadowRoot.querySelector('#contentWrapper');
  }

  tracker?: VelocityTracker = null;
  wrapper?: HTMLElement = null;
  scroller?: HTMLElement = null;
  scrollerOverflow: string = '';

  position: number = 0;
  itemIndex: number = 0;
  width: number = 0;
  startX: number = 0;
  startY: number = 0;
  startPosition: number = 0;
  state: string = 'initial';

  constructor() {
    super();
    this.addEventListener('touchstart', this, {passive: true});
    this.addEventListener('touchmove', this, {passive: true});
    this.addEventListener('touchend', this, {passive: true});
    this.addEventListener('pointerdown', this, {passive: true});
    this.addEventListener('pointermove', this, {passive: true});
    this.addEventListener('pointerup', this, {passive: true});
  }

  disconnectedCallback() {
    this.scroller = null;
  }

  handleEvent(event: PointerEvent | TouchEvent) {
    if ('pointerType' in event && event.pointerType !== 'touch') {
      return;
    }

    switch (event.type) {
      case 'pointerdown':
        this._onPointerDown(event as PointerEvent);
        break;
      case 'pointermove':
        if ((event as PointerEvent).pressure) {
          this.setPointerCapture((event as PointerEvent).pointerId);
          this._onPointerPan(event as PointerEvent, event.timeStamp);
        }
        break;
      case 'pointerup':
        this.releasePointerCapture((event as PointerEvent).pointerId);
        this._onPointerUp(event as PointerEvent, event.timeStamp);
        break;
      case 'touchstart':
        this._onPointerDown((event as TouchEvent).changedTouches[0]);
        break;
      case 'touchmove':
        this._onPointerPan((event as TouchEvent).changedTouches[0], event.timeStamp);
        break;
      case 'touchend':
        this._onPointerUp((event as TouchEvent).changedTouches[0], event.timeStamp);
        break;
    }
  }

  setPosition(position: number): void {
    this.position = position;
    this.width = this.offsetWidth;
    this.wrapper.style.opacity = String((this.width - Math.abs(position)) / this.width);
    this.wrapper.style.transform = `translateX(${position}px)`;
  }

  _dismiss() {
    this.style.opacity = '0';

    const currentHeight = getComputedStyle(this).height;

    const collapseAnim = this.animate(
        {height: [currentHeight, '0px']},
        {duration: 100, iterations: 1, fill: 'forwards'});

    collapseAnim.onfinish = () => {
      this.setPosition(0);
      this.style.opacity = '1';
      const event = new CustomEvent(
        'remove', {detail: {itemIndex: this.itemIndex}, bubbles: true});
      this.dispatchEvent(event);
    }
  }

  settle(targetPosition: number): void {
    this.state = 'initial';
    if (targetPosition === this.position) {
      return;
    }

    const isDismiss = targetPosition !== 0;

    const animation = this.wrapper.animate(
        {
          transform: [
            `translateX(${this.position}px)`,
            `translateX(${targetPosition}px)`
          ],
          opacity: [parseFloat(this.wrapper.style.opacity), isDismiss ? 0 : 1]
        },
        {
          duration: Math.abs(targetPosition - this.position) * 0.5,
          iterations: 1
        });

    this.position = targetPosition;
    animation.onfinish = () =>
        isDismiss ? this._dismiss() : this.setPosition(0);
  }

  fling(velocityX: number): void {
    this.state = 'initial';
    const targetPosition = velocityX < 0 ? -this.width : this.width;

    const animation = this.wrapper.animate(
        {
          transform: [
            `translateX(${this.position}px)`,
            `translateX(${targetPosition}px)`
          ],
          opacity: [parseFloat(this.wrapper.style.opacity), 0]
        },
        {
          duration:
              Math.abs(targetPosition - this.position) / Math.abs(velocityX),
          iterations: 1
        });

    animation.onfinish = this._dismiss.bind(this);
  }

  _settleToClosestPosition() {
    const fraction = this.position / this.width;
    if (fraction > 0.5) {
      this.settle(this.width);
    } else if (fraction < -0.5) {
      this.settle(-this.width);
    } else {
      this.settle(0);
    }
  }

  _onPointerDown(change: PointerEvent | Touch): void {
    this.state = 'initial';
    this.startX = change.clientX;
    this.startY = change.clientY;
    this.startPosition = 0;
  }

  _onPointerPan(change: PointerEvent | Touch, timeStamp: number): void {
    if (this.state == 'initial') {
      const deltaX = change.clientX - this.startX;
      const deltaY = change.clientY - this.startY;

      // Shaky or sloppy fingers are common using scroll, so
      // we ignore mini pans of 5 dips like Android.
      if (deltaX ** 2 + deltaY ** 2 < kTouchSlopValue ** 2) {
        return;
      }

      // If scrolled vertically, ignore following events.
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        this.state = 'ignoring';
        return;
      }

      this.state = 'dragging';
      if (!this.scroller) {
        this.scroller = this.offsetParent as HTMLElement;
        this.scrollerOverflow = this.scroller.style.overflow;
      }
      this.scroller.style.overflow = 'hidden';
    }

    if (this.state == 'dragging') {
      this.tracker = this.tracker || new VelocityTracker();
      this.tracker.update(change.clientX, timeStamp);

      const deltaX = change.clientX - this.startX;
      this.setPosition(this.startPosition + deltaX);
    }
  }

  _onPointerUp(change: PointerEvent | Touch, timeStamp: number) {
    if (this.state == 'dragging') {
      this.scroller.style.overflow = this.scrollerOverflow;
      const velocity = this.tracker.update(change.clientX, timeStamp).velocityX;
      this.tracker = null;
      if (Math.abs(velocity) > kMinFlingVelocityValue) {
        this.fling(velocity);
      } else {
        this._settleToClosestPosition();
      }
    }
  }
}