import sort from '../matchers';

test('result sort', () => {
  const players = [
    { name: 'мечник', health: 45 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 5 },
  ];
  const result = sort(players);

  const expected = [
    { name: 'маг', health: 60 },
    { name: 'мечник', health: 45 },
    { name: 'лучник', health: 5 },
  ];

  expect(result).toEqual(expected);
});

test('not to Be', () => {
  const players = [
    { name: 'мечник', health: 45 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 5 },
  ];
  const result = sort(players);

  const expected = [
    { name: 'маг', health: 60 },
    { name: 'мечник', health: 45 },
    { name: 'лучник', health: 5 },
  ];

  expect(result).not.toBe(expected);
});
