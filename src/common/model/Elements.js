import AbstractElement from './AbstractElement';

export class H1Element extends AbstractElement {
  tag = 'h1';
  placeholder = 'Header 1';

  constructor(content) {
    super();
    this.content = content ?? this.placeholder;
  }
}

export class H2Element extends AbstractElement {
  tag = 'h2';
  placeholder = 'Header 2';

  constructor(content) {
    super();
    this.content = content ?? this.placeholder;
  }
}

export class H3Element extends AbstractElement {
  tag = 'h3';
  placeholder = 'Header 3';

  constructor(content) {
    super();
    this.content = content ?? this.placeholder;
  }
}

export class ParagraphElement extends AbstractElement {
  tag = 'p';
  placeholder = 'Paragraph';

  constructor(content) {
    super();
    this.content = content ?? this.placeholder;
  }
}

export class ImageElement extends AbstractElement {
  tag = 'img';
  placeholder = '';

  constructor(content) {
    super();
    this.content = content ?? this.placeholder;
  }
}
