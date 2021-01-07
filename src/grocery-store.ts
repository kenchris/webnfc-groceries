function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = self.indexedDB.open("kv-storage:default", 1);

    request.onsuccess = () => {
      const database = request.result;
      resolve(database);
    };

    request.onerror = () => reject(request.error);
  })
}

function promiseForTransaction(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => {
      resolve();
    };
    transaction.onabort = () => {
      reject(transaction.error);
    };
    transaction.onerror = () => {
      reject(transaction.error);
    };
  });
}

function promiseForRequest(request: IDBRequest, mutator?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      let result = request.result;
      if (mutator) result = mutator(result);
      resolve(result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}

function keyValuePairPromise(store, range): Promise<any> {
  return promiseForRequest(
    store.openCursor(range),
    result => result ? [result.key, result.value] : []
  );
}

async function performDatabaseOperation(
    database: IDBDatabase,
    mode: "readonly" | "readwrite",
    steps: (transaction: IDBTransaction, store: any) => Promise<any>) {
  const transaction = database.transaction("store", mode);
  const store = transaction.objectStore("store");
  return steps(transaction, store);
}

let singleton: JSONStore | null = null;

export class JSONStore extends EventTarget {
  constructor() {
    super();
    if (!singleton) {
      singleton = this;
    }
    return singleton;
  }

  async set(key: string, value: object): Promise<void> {
    const database = await open();
    await performDatabaseOperation(database, 'readwrite', (transaction, store) => {
      store.put(JSON.stringify(value), key);
  
      return promiseForTransaction(transaction);
    });
    this.dispatchEvent(new Event("change"));
    database.close();
  }

  async get(key: string): Promise<object> {
    const database = await open();
    const entry = await performDatabaseOperation(database, 'readonly', (_, store) => {
      return promiseForRequest(store.get(key));
    });
    database.close();
    return entry ? JSON.parse(entry) : null;
  }

  async has(key: string): Promise<boolean> {
    return !!this.get(key);
  }

  async remove(key: string): Promise<void> {
    const database = await open();
    await performDatabaseOperation(database, 'readwrite', (transaction, store) => {
      store.delete(key);
      return promiseForTransaction(transaction);
    });
    this.dispatchEvent(new Event("change"));
    database.close();
  }

  async *[Symbol.asyncIterator]() {
    let lastKey = -Infinity;
    const database = await open();

    do {
      let [key, value] = await performDatabaseOperation(database, 'readonly', (_, store) => 
        keyValuePairPromise(store, IDBKeyRange.lowerBound(lastKey, true))
      );
      lastKey = key;
      if (key === undefined) {
        break;
      }

      let result = JSON.parse(value);
      result.name = key;
      yield result;
    } while (true)

    database.close();
  }

  entries() {
    return this[Symbol.asyncIterator]();
  }
}