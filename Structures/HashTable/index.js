class HashTable {
  constructor(storageSize = 9) {
    this._storage = [];
    this._storageMax = storageSize;
  }

  hash(data) {
    let result = 0;
    for(let i = 0; i < data.length; i++) {
      result += data.charCodeAt(i);
    }
    return result % this._storageMax;
  }

  add(key, value) {
    let index = this.hash(key);
    if (this._storage[index] === undefined) {
      this._storage[index] = [  [key, value]  ];
      return this;
    }
    else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i] && this._storage[index][i][0] === key) {
          throw new Error("HashTable already has key you try add");
        }
      }
      this._storage[index].push([key, value]);
      return this;
    }
  }

  at(key) {
    const index = this.hash(key);
    if(this._storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i] && this._storage[index][i][0] === key) {
          return this._storage[index][i][1];
        }
      }
      return undefined;
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (this._storage[index] === undefined) {
      throw new Error("HashTable not has element you try deleting");
    } else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i] && this._storage[index][i][0] === key) {
          delete this._storage[index][i];
          return this;
        }
      }
      throw new Error("HashTable not has element you try deleting");
    }
  }
}

let ht = new HashTable();
ht.add(1, "IT").add(2, "Job");
console.log( ht.at(2) );
ht.remove(2);
console.log( ht.at(2) );
