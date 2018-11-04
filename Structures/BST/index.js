class Node {
  constructor(element = null, left = null, right = null) {
    this.data = element;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = new Node();
  }

  add(element) {
    let node = this.root;
    if (node.data === null) {
      node.data = element;
    }
    let insertion = function (node) {
      if(element < node.data) {
        if(node.left === null) {
          node.left = new Node(element);
        }
        else {
          insertion(node.left);
        }
      }
      else if(element > node.data) {
        if(node.right === null) {
          node.right = new Node(element);
        }
        else {
          insertion(node.right);
        }
      }
      else {
        return null;
      }
    }
    insertion(node); 
  }

  findMin() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  findMax() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  has(data) {
    let current = this.root;

    while(current) {
      if(current.data < data) {
        current = current.right;
      }
      else if(current.data > data) {
        current = current.left;
      }
      else {
        return true;
      }
    }
    return false;
  }

//Переделать с помощью рекурсии
  remove(data) {
    if ( !this.has(data) ) {
      throw new Error("Tree doesn't have element you try deleting.");
    }
    let current = this.root;
    let previous = null;
    //Поиск удаляемого элемента
    while (current) {
      if (current.data < data) {
        previous = current;
        current = current.right;
      }
      else if (current.data > data) {
        previous = current;
        current = current.left;
      }
      else {
        break;
      }
    }
    //Удаление в простых случаях
    if(current.left === null && current.right === null) {
      if(previous.left && previous.left.data === data) {
        previous.left = null;
      }
      else {
        previous.right = null;
      }
    }
    else if (current.left === null) {
      if(previous.left && previous.left.data === data) {
        previous.left = current.right;
      }
      else {
        previous.right = current.right;
      }
    }
    else if (current.right === null) {
      if(previous.left && previous.left.data === data) {
        previous.left = current.left;
      }
      else {
        previous.right = current.left;
      }
    }
    else {
      let changeElement = current.right;
      let previousElement;
      while(changeElement.left) {
        previousElement = changeElement;
        changeElement = changeElement.left;
      }
      previousElement.left = null;
      current.data = changeElement.data;
    }
  }

  minHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  maxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right +1;
    }
  }

}
