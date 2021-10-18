import Magician from '../magician';

test('create object Magician', () => {
  const player = new Magician('player', 'Magician');
  expect(player).toBeDefined();
  expect(player.attack).toEqual(10);
  expect(player.defence).toEqual(40);
});
