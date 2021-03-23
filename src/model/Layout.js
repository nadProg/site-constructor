import AreaFactory from './AreaFactory';

const areaFactory = new AreaFactory();

export default class Layout {
  constructor(config) {
    this.areas = [];

    areaFactory.resetIDCounts();

    config.forEach(item => {
      if (typeof item === 'string') {
        this.addArea(item)
      } else {
        for (let i = 0; i < item.amount; i++) {
          this.addArea(item.type)
        }
      }
    })
  }

  areaGetter(id) {
    return `_area-${id}`
  }

  setAreaGetter(area) {
    this[this.areaGetter(area.id)] = area;
  }

  addArea(type) {
    const area = areaFactory.create(type);
    this.areas.push(area);
    this.setAreaGetter(area);
  }
}