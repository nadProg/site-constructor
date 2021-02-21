export default class AbstractArea {
  type = 'abstract';

  constructor(elements = []) {
    this.elements = [...elements];
    
    this.idNumber = this.idCount;
  }

  get id() {
    return `${this.type}-${this.idNumber}`;
  }

  get idCount() {
    if (!this.__proto__.constructor._idCount)
      this.__proto__.constructor._idCount = 0;
    
    this.__proto__.constructor._idCount++;

    return this.__proto__.constructor._idCount;
  }

  set idCount(idCount) {
    this.__proto__.constructor._idCount = idCount;
  }
}