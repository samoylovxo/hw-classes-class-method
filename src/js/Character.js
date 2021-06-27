/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное имя');
    }

    if (
      type === 'Bowman' ||
      type === 'Swordsman' ||
      type === 'Magician' ||
      type === 'Daemon' ||
      type === 'Undead' ||
      type === 'Zombie'
    ) {
      this.type = type;
    } else {
      throw new Error('Неверный тип');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      this.health = 0;
    }
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
