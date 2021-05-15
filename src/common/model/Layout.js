import AreaFactory from './AreaFactory';

const areaFactory = new AreaFactory();

export default class Layout {
  constructor(config) {
    this.map = {};
    this.array = [];

    areaFactory.resetIDCounts();

    config.forEach((item) => {
      if (typeof item === 'string') {
        this.addArea(item);
      } else {
        for (let i = 0; i < item.amount; i++) {
          this.addArea(item.type);
        }
      }
    });
  }

  setAreaGetter(area) {
    this.map[area.id] = area;
  }

  addArea(type) {
    const area = areaFactory.create(type);
    this.array.push(area.id);
    this.setAreaGetter(area);
  }
}
