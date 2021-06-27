/* eslint-disable linebreak-style */
import Character from './Character';

// eslint-disable-next-line no-unused-vars
export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
