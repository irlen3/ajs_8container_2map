import lifeLine from '../lifeline';

test('should be result', () => {
  const player = { name: 'Маг', health: 100 };
  const result = lifeLine(player);

  expect(result).toBe('healthy');
});

test('should be result', () => {
  const player = { name: 'Маг', health: 50 };
  const result = lifeLine(player);

  expect(result).toBe('wounded');
});

test('should be result', () => {
  const player = { name: 'Маг', health: 5 };
  const result = lifeLine(player);

  expect(result).toBe('critical');
});
