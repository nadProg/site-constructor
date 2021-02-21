import { HeaderArea, ContentArea, FooterArea} from './Areas';

export default class Layout {
  constructor() {
    this.areas = [];
    this.areas.push(new HeaderArea());
    this.areas.push(new ContentArea());
    this.areas.push(new ContentArea());
    this.areas.push(new ContentArea());
    this.areas.push(new FooterArea());
  }
}