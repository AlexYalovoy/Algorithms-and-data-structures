class Stack {
  constructor() {
    this._count = 0;
    this._data = [];
  }

  push(element) {
    this._data[this._count] = element;
    this._count++
  }

  pop() {
    if(this._count == 0) {
      return undefined;
    }
    var result =  this._data[this._count - 1];
    delete this._data[this._count - 1];
    this._count--;
    return result;
  }

  peek() {
    return this._data[this._count - 1];
  }

  size() {
    return this._count;
  }
}

module.exports = Stack;