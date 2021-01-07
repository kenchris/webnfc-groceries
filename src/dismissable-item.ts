import { LitElement, html, css, customElement } from 'lit-element';
import { query, eventOptions } from 'lit-element/lib/decorators';
import { style as listStyle } from './mwc-list-item-css';

const kMinFlingVelocityValue = 0.4;
const kTouchSlopValue = 5;

class VelocityTracker {
  #history: Array<{ x: number, timeStamp: number }> = [];
  #timeWindow: number = 50;

  private _pruneHistory(timeStamp: number) {
    const index = this.#history.findIndex(touch => {
      return touch.timeStamp > timeStamp - this.#timeWindow;
    });
    this.#history.splice(0, index + 1);
  }

  reset() {
    this.#history = [];
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
      #target {
        contain: content;
        will-change: transform, opacity;
        background-color: var(--item-bg-color);
        width: 100%;
        height: 100%;
        touch-action: none;
      }
    `
  ];

  render() {
    return html`
      <div id="target" class="mdc-list-item"
        @pointerdown=${this.handlePointerDown}
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handlePointerUp}>
        <slot></slot>
      </div>
    `;
  }

  // @ts-ignore
  @query('#target') target: HTMLElement;

  #tracker: VelocityTracker = new VelocityTracker();
  #parentOverflow: string = '';

  #position: number = 0;
  #width: number = 0;

  #startX: number = 0;
  #startY: number = 0;
  #state: string = 'initial';

  @eventOptions({ passive: true })
  private handlePointerDown(event: PointerEvent): void {
    if (event.pointerType != 'touch') {
      return;
    }

    this.#state = 'initial';
    this.#startX = event.clientX;
    this.#startY = event.clientY;
    this.#tracker.reset();
  }

  @eventOptions({ passive: true })
  private handlePointerMove(event: PointerEvent): void {
    if (event.pointerType != 'touch') {
      return;
    }

    if (this.#state == 'initial') {
      const deltaX = event.clientX - this.#startX;
      const deltaY = event.clientY - this.#startY;

      // Shaky or sloppy fingers are common using scroll, so
      // we ignore mini pans of 5 dips like Android.
      if (deltaX ** 2 + deltaY ** 2 < kTouchSlopValue ** 2) {
        return;
      }

      // If scrolled vertically, ignore following events.
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        this.#state = 'ignoring';
        return;
      }

      if (this.offsetParent && this.offsetParent instanceof HTMLElement) {
        this.#parentOverflow = this.offsetParent.style.overflow;
        this.offsetParent.style.overflow = 'hidden';
      }

      this.#state = 'dragging';
    }

    if (this.#state == 'dragging') {
      this.#tracker.update(event.clientX, event.timeStamp);
      this.setPosition(event.clientX - this.#startX);
    }
  }

  @eventOptions({ passive: true })
  private handlePointerUp(event: PointerEvent) {
    if (event.pointerType != 'touch' || this.#state !== 'dragging') {
      return;
    }

    if (this.offsetParent && this.offsetParent instanceof HTMLElement) {
      this.offsetParent.style.overflow = this.#parentOverflow; // Reset overflow.
    }
    const velocity = this.#tracker.update(event.clientX, event.timeStamp).velocityX;
    if (Math.abs(velocity) > kMinFlingVelocityValue) {
      this.fling(velocity);
    } else {
      this._settleToClosestPosition();
    }
  }

  setPosition(position: number): void {
    this.#position = position;
    this.#width = this.offsetWidth;
    this.target.style.opacity = String((this.#width - Math.abs(position)) / this.#width);
    this.target.style.transform = `translateX(${position}px)`;
  }

  private _dismiss() {
    this.style.opacity = '0';

    const currentHeight = getComputedStyle(this).height;

    const collapseAnim = this.animate(
        {height: [currentHeight, '0px']},
        {duration: 100, iterations: 1, fill: 'forwards'});

    collapseAnim.onfinish = () => {
      this.setPosition(0);
      this.style.opacity = '1';
      this.dispatchEvent(new Event('remove', { bubbles: true }));
    }
  }

  settle(targetPosition: number): void {
    this.#state = 'initial';
    if (targetPosition === this.#position) {
      return;
    }

    const isDismiss = targetPosition !== 0;

    const animation = this.target.animate(
        {
          transform: [
            `translateX(${this.#position}px)`,
            `translateX(${targetPosition}px)`
          ],
          opacity: [parseFloat(this.target.style.opacity), isDismiss ? 0 : 1]
        },
        {
          duration: Math.abs(targetPosition - this.#position) * 0.5,
          iterations: 1
        });

    this.#position = targetPosition;
    animation.onfinish = () => isDismiss ? this._dismiss() : this.setPosition(0);
  }

  fling(velocityX: number): void {
    this.#state = 'initial';
    const targetPosition = velocityX < 0 ? -this.#width : this.#width;

    const animation = this.target.animate(
        {
          transform: [
            `translateX(${this.#position}px)`,
            `translateX(${targetPosition}px)`
          ],
          opacity: [parseFloat(this.target.style.opacity), 0]
        },
        {
          duration:
              Math.abs(targetPosition - this.#position) / Math.abs(velocityX),
          iterations: 1
        });

    animation.onfinish = this._dismiss.bind(this);
  }

  private _settleToClosestPosition() {
    const fraction = this.#position / this.#width;
    if (fraction > 0.5) {
      this.settle(this.#width);
    } else if (fraction < -0.5) {
      this.settle(-this.#width);
    } else {
      this.settle(0);
    }
  }
}