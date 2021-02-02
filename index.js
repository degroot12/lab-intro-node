class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get(pos) {
    let getItem = this.items[pos]
    if(!getItem){
      throw new Error('OutOfBounds')
    }
    return getItem
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length-1]
    
  }
  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
      return this.items[0]
  }

  sum() {
    if(this.length === 0){
      return 0
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.items.reduce(reducer)
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (this.items.reduce(reducer))/this.length
  }
}

module.exports = SortedList;
