import Team from '../addPlayer';
import Character from '../character';

describe('test', () => {
  test('test function add', () => {
    const team = new Team();
    function result() {
      const character = new Character('player1', 'Zombie');
      team.add(character);
      team.add(character);
      team.toArray();
    }

    expect(result).toThrowError(new Error('Такой персонаж уже есть в команде'));
  });

  test('test function addAll', () => {
    const team = new Team();
    const character = new Character('player1', 'Bowerman');
    const character2 = new Character('player2', 'Bowerman');
    const character3 = new Character('player3', 'Magician');
    team.addAll(character, character2, character3);
    const array = team.toArray();

    const expected = ['player1', 'player2', 'player3'];
    expect(array).toEqual(expected);
  });
});
