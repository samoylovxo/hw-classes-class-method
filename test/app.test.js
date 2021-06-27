/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import Character from '../src/js/Character';
import Bowman from '../src/js/Bowman';
import Daemon from '../src/js/Daemon';
import Magician from '../src/js/Magician';
import Swordsman from '../src/js/Swordsman';
import Undead from '../src/js/Undead';
import Zombie from '../src/js/Zombie';

test('Character', () => {
  expect(new Character('test', 'Bowman')).toEqual({ name: 'test', type: 'Bowman', health: 100, level: 1 });
});
test('Character name length > 10', () => {
  expect(() => new Character('aaaaaaaaaaa', 'Bowman')).toThrowError('Некорректное имя');
});
test('Character name length < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError('Некорректное имя');
});
test('Character name no string', () => {
  expect(() => new Character(111, 'Bowman')).toThrowError('Некорректное имя');
});
test('Character no type1', () => {
  expect(() => new Character('ddddd', 'qwe')).toThrowError('Неверный тип');
});
test('Character no type2', () => {
  expect(() => new Character('ddddd', 111)).toThrowError('Неверный тип');
});

test('Browman', () => {
  expect(new Bowman('bow')).toEqual({
    name: 'bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Daemon', () => {
  expect(new Daemon('dea')).toEqual({
    name: 'dea',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  expect(new Magician('mag')).toEqual({
    name: 'mag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  expect(new Swordsman('swo')).toEqual({
    name: 'swo',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  expect(new Undead('und')).toEqual({
    name: 'und',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  expect(new Zombie('zom')).toEqual({
    name: 'zom',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Magician levelUp', () => {
  const magician = new Magician('level');
  magician.health = 50;
  magician.levelUp();

  expect(magician).toEqual({
    name: 'level',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Magician levelUp health == 0', () => {
  const magician = new Magician('level');
  magician.health = 0;

  expect(() => magician.levelUp()).toThrowError('Нельзя повысить левел умершего');
});

test('Swordsman damage', () => {
  const swordsman = new Swordsman('damage');
  swordsman.damage(25);

  expect(swordsman).toEqual({
    name: 'damage',
    type: 'Swordsman',
    health: 77.5,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Swordsman damage health <= 0', () => {
  const swordsman = new Swordsman('damage');
  swordsman.health = 0;
  swordsman.damage(25);

  expect(swordsman).toEqual({
    name: 'damage',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
