import { storage } from "kv-storage-polyfill/dist/kv-storage-polyfill.mjs";

let singleton;

export class GroceryStore extends EventTarget {
  constructor() {
    super();
    if (!singleton) {
      singleton = this;
    }
    return singleton;
  }

  async set(name, note) {
    const entry = await storage.get(name);

    await storage.set(name, JSON.stringify({
      note: note,
      done: false
    }));
    this.dispatchEvent(new Event("change"));
  }

  async has(name) {
    const entry = await storage.get(name);
    return !!entry;
  }

  async change(name, done) {
    const entry = await storage.get(name);
    let json = JSON.parse(entry);
    json.done = done;

    await storage.set(name, JSON.stringify(json));
    this.dispatchEvent(new Event("change"));
  }

  async *[Symbol.asyncIterator]() {
    for await (let entry of storage.entries()) {
      const [key, value] = entry;
      let result = JSON.parse(value);
      result.name = key;
      yield result;
    } 
  }

  entries() {
    return this[Symbol.asyncIterator]();
  }
}