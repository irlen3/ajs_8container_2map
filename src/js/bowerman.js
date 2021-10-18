import Character from './domain';

export default class Bowerman extends Character { // класс Bowerman явл.наследником Character
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
