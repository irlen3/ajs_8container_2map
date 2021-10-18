export default class Character {
  constructor(name, type) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа
    this.attack = 0; // атака
    this.defence = 0; // защита
    this.checkErrorName();
    this.checkErrorType();
  }

  checkErrorName() {
    console.log('game started');
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      console.log('недопустимые значения имени');
      throw new Error('недопустимые значения имени');
    }
  }

  checkErrorType() {
    if (this.type !== 'Bowerman' && this.type !== 'Swordsman' && this.type !== 'Magician'
    && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      console.log('недопустимые значения типа');
      console.log(this.type === 'Swordsman');
      throw new Error('недопустимые значения типа');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error('нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
