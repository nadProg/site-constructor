export default class AbstractArea {
  constructor(elements = []) {
    this.elements = {
      array: [],
      map: {},
    };

    elements.forEach((element) => {
      this.elements.array.push(element.id);
      this.elements.map[element.id] = element;
    });
  }

  setId() {
    this.id = `${this.type}-${this.idCount}`;
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

  static resetIdCount() {
    this._idCount = 0;
  }
}
