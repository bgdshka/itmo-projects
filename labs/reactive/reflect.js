void Reflect.defineProperty(global, 'sayAName', {get() {return `My name is ${this.name ?? 'unknown'}`;}})