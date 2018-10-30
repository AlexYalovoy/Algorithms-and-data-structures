class MyMap {
  constructor() {
    this._count = 0;
    this._collection = {};
  }

  add(key, value) {
    this.has(key) ? null : this._collection[key] = value;
    this._count++;
    return this;
  }

  elementAt(key) {
    return this._collection[key];
  }

  update(key, value) {
    if( this.has(key) ) {
      this._collection[key] = value;
    }
    else {
      throw new SyntaxError("Updated element not exist!");
    }
    return this;
  }

  delete(key) {
    if( this.has(key) ) {
      delete this._collection[key];
    }
    else {
      throw new SyntaxError("Deleted element not exist!");
    }
    this._count--;
    return this;
  }

  has(key) {
    return (this._collection.hasOwnProperty(key));
  }

  elementsCount() {
    return this._count;
  }
}