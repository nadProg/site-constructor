import AbstractElement from './AbstractElement';
import { H1Element, H2Element, H3Element, ParagraphElement, ImageElement } from './Elements';

export default class ElementFactory {
  constructor() {
    this.creators = {
      h1: H1Element,
      h2: H2Element,
      h3: H3Element,
      p: ParagraphElement,
      img: ImageElement,
      abstract: AbstractElement,
    };
  }

  create(type = 'abstract', content) {
    return new this.creators[type](content);
  }
}
