import { nanoid } from 'nanoid';

export default class AbstractElement {
  constructor() {
    this.id = nanoid();
  }
}
