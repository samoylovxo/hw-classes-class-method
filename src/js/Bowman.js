/* eslint-disable linebreak-style */
import Character from './Character';

// eslint-disable-next-line no-unused-vars
export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}
