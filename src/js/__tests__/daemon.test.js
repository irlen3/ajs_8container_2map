import Daemon from '../daemon';

test('create object Daemon', () => {
  const player = new Daemon('player', 'Daemon');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(10);
  expect(player.defence).toEqual(40);
});
