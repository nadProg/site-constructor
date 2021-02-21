import idGenerator from './../utils/idGenerator';

export default class ElementFactory {
  constructor({ tag, placeholder }) {
    this.tag = tag;
    this.content =
      this.tag === 'img' ? null : placeholder;
      this.id = idGenerator();
  }
}