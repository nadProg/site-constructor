import AbstractArea from './AbstractArea';

export class HeaderArea extends AbstractArea {
  type = 'header';
}

export class ContentArea extends AbstractArea {
  type = 'content';
}

export class FooterArea extends AbstractArea {
  type = 'footer';
}