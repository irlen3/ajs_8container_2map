import Zombie from '../zombie';

test('create object Zombie', () => {
  const player = new Zombie('player', 'Zombie');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(40);
  expect(player.defence).toEqual(10);
});
