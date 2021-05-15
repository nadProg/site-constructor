import ElementFactory from './ElementFactory';

const elementFactory = new ElementFactory();
elementFactory.create = elementFactory.create.bind(elementFactory);

export default elementFactory.create;
