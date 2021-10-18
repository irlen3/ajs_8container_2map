import Swordsman from '../swordsman';

test('create object Swordsman', () => {
  const player = new Swordsman('player', 'Swordsman');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(40);
  expect(player.defence).toEqual(10);
});
