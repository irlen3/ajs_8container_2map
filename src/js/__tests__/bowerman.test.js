import Bowerman from '../bowerman';

test('create object Bowerman', () => {
  const player = new Bowerman('player', 'Bowerman');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(25);
  expect(player.defence).toEqual(25);
});
