import AbstractArea from './AbstractArea';

export class HeaderArea extends AbstractArea {
  tag = 'header';
  type = 'header';
  placeholder = 'Header';

  constructor(elements) {
    super(elements);
    this.setId();
  }
}

export class ContentArea extends AbstractArea {
  tag = 'div';
  type = 'content';
  placeholder = 'Content';

  constructor(elements) {
    super(elements);
    this.setId();
  }
}

export class FooterArea extends AbstractArea {
  tag = 'footer';
  type = 'footer';
  placeholder = 'Footer';

  constructor(elements) {
    super(elements);
    this.setId();
  }
}
