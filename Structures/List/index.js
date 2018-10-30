class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class List {
  
  constructor() {
    this._length = 0;
    this._head = null;
  }

  add(element) {
    let newNode = new Node(element);
    if(this._length == 0) {
      this._head = newNode;
    }
    else {
      let currentNode = this._head;
      while(currentNode.next != null) currentNode = currentNode.next;
      currentNode.next = newNode;
    }
    this._length++;
  }

  addAt(element, index) {
    let newNode = new Node(element);
    let nextNode = null;
    let counter = 0;
    let previousNode = this._head;
    while(counter != index - 1) {
      previousNode = previousNode.next;
      counter++;
    }
    nextNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = nextNode;

    this._length++;
  }

  remove(element) {
    let previousNode = this._head;
    let currentNode = this._head;
    currentNode = currentNode.next;
    while(previousNode.element != element) { 
      currentNode = currentNode.next;
      previousNode = previousNode.next;
    }
    previousNode.next = currentNode.next;
    this._length--;
  }

  removeAt(index) {
    let previousNode = this._head;
    let currentNode = this._head;  

    if(index == 0){
      this._head = previousNode.next;
    }
    else{
      currentNode = currentNode.next;
      for(let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this._length--;
  }

  elementAt(index) {
    let currentNode = this._head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }
}

module.exports = List;