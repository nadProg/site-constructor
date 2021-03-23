import AbstractArea from './AbstractArea';
import { HeaderArea, ContentArea, FooterArea } from './Areas';

export default class AreaFactory {
  constructor() {
    this.creators = {
      header: HeaderArea,
      content: ContentArea,
      footer: FooterArea,
      abstract: AbstractArea,
    }
  }

  create(type = 'abstract', elements) {
    return new this.creators[type](elements);
  }

  resetIDCounts() {
    Array.from(Object.values(this.creators)).forEach(creator => creator.resetIdCount())
  }
}