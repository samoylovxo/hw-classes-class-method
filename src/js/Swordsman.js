/* eslint-disable linebreak-style */
import Character from './Character';

// eslint-disable-next-line no-unused-vars
export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
