import Undead from '../undead';

test('create object Undead', () => {
  const player = new Undead('player', 'Undead');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(25);
  expect(player.defence).toEqual(25);
});
