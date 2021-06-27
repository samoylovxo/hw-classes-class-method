/* eslint-disable linebreak-style */
import Character from './Character';

// eslint-disable-next-line no-unused-vars
export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
