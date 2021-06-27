/* eslint-disable linebreak-style */
import Character from './Character';

// eslint-disable-next-line no-unused-vars
export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}