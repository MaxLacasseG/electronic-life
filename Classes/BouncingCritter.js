export default class BouncingCritter {
  constructor (direction) {
    this.direction = direction;
  }

  act (view) {
    if (view.look (this.direction != ' ')) {
      this.direction = view.find (' ') || 's';
    }
    return {type: 'move', direction: this.direction};
  }
}
