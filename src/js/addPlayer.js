// Класс должен хранить данные о персонажах команды в поле типа Set:
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character.name)) {
      throw new Error('Такой персонаж уже есть в команде');
    } else { this.members.add(character.name); }
  }

  addAll(...rest) {
    this.members = rest.reduce((result, player) => {
      result.add(player.name);
      return result;
    }, this.members);
  }

  toArray() {
    const array = [];
    for (const value of this.members) { array.push(value); }
    return array;
  }
}
