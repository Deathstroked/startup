 export default class eventEmitter {

  constructor() {
    this.listeners = new Map();
  }
  on(eventName, callback) {
    this.listeners.has(eventName) || this.listeners.set(eventName, []);
    this.listeners.get(eventName).push(callback);
  }

  off(eventName, callback) {
      let listeners = this.listeners.get(eventName),
          index;

      if (listeners && listeners.length) {
          index = listeners.reduce((i, listener, index) => {
              return (isFunction(listener) && listener === callback) ?
                  i = index :
                  i;
          }, -1);

          if (index > -1) {
              listeners.splice(index, 1);
              this.listeners.set(eventName, listeners);
              return true;
          }
      }
      return false;
  }
  emit(eventName, ...args) {
      let listeners = this.listeners.get(eventName);

      if (listeners && listeners.length) {
          listeners.forEach((listener) => {
              listener(...args);
          });
          return true;
      }
      return false;
  }
}
