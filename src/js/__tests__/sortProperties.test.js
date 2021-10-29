import orderByProperties from '../sortProperties';

test('result sort', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const result = orderByProperties(hero, ['name', 'level']);

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(expected);
});

test('check toHaveProperty', () => {
  const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(hero).not.toEqual({ bb: 2, cc: 3 });
  expect(hero).toHaveProperty('name');
  expect(hero).not.toHaveProperty('getterProp');
});
