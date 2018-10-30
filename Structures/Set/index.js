function Set() {
  var collection = [];
  
  this.add = function(element) {
    if( !this.has(element) ) {
      collection.push(element);
    }
  }

  this.has = function(element) {
    return ( collection.indexOf(element) !== -1 );
  }

  this.values = function() {
    return collection;
  }

  this.remove = function(element) {
    var index = collection.indexOf(element);
    if(index !== -1){
      collection.splice(index, 1);
    }
    return this;
  }

  this.size = function() {
    return collection.length;
  }

  this.union = function(secondSet) {

    for (let i = 0; i < secondSet.size(); i++) {
      if ( this.has( secondSet.values()[i]) === false  ) {
        collection.push( secondSet.values()[i] );
      }
    }

    return collection;
  }

  this.intersection = function(secondSet) {
    var newCollection = [];

    for (let i = 0; i < secondSet.size(); i++) {
      if ( this.has( secondSet.values()[i] ) ) {
        newCollection.push( secondSet.values()[i] );
      }
    }

    collection = newCollection;
    return collection;
  }

  this.difference = function(secondSet) {

    for (let i = 0; i < secondSet.size(); i++) {
      if ( this.has( secondSet.values()[i] ) ) {
        collection.splice(i, 1);
        i--;
      }
    }
    
    return collection;
  }
}

module.exports = Set;