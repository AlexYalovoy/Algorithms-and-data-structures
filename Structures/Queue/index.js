var Stack = require('../Stack');

//realization via 2 stacks
class Queue {

  constructor() {
    this._inputStack = new Stack();
    this._outputStack = new Stack();
  }

  enqueue(element) {
    this._inputStack.push(element);
  }

  dequeue() {
    for(let i = 0; i < this._inputStack.size() + this._outputStack.size(); i++) {
      this._outputStack.push( this._inputStack.pop() );
    }
    var result = this._outputStack.pop();

    for(let i = 0; i < this._outputStack.size() + this._inputStack.size(); i++) {
      this._inputStack.push( this._outputStack.pop() );
    }

    return result;
  }

  get Size() {
    return this._inputStack.size();
  }
}

module.exports = Queue;

//realization via 2 stacks too
class PriorityQueue {

  constructor() {
    this._inputStack = new Stack();
    this._outputStack = new Stack();
  }

  enqueue(element) {
    if (this.Size == 0) {
      this._inputStack.push(element);
    }
    else {
      while ( (this._inputStack.size() > 0) && (element[1] < this._inputStack.peek()[1]) ) {
        this._outputStack.push( this._inputStack.pop() );
      }

      this._outputStack.push(element);

      while (this._outputStack.size() > 0) {
        this._inputStack.push( this._outputStack.pop() );
      }
    }
  }

  dequeue() {
    while (this._inputStack.size() > 0) {
      this._outputStack.push( this._inputStack.pop() );
    }
    var result = this._outputStack.pop();

    while (this._outputStack.size() > 0)  {
      this._inputStack.push( this._outputStack.pop() );
    }

    return result[0];
  }

  get Size() {
    return this._inputStack.size();
  }
}

