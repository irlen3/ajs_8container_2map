import validateUsername from '../validationName';

describe('test validationName', () => {
  test('common rules', () => {
    const name = 'Irina';
    const result = validateUsername(name);

    expect(result).toBe(true);
  });

  test('common rules', () => {
    const name = 'Ирина';
    const result = validateUsername(name);

    expect(result).toBe(false);
  });

  test('begin symbol', () => {
    const name = '1Irina';
    const result = validateUsername(name);

    expect(result).toBe(false);
  });

  test('end symbol', () => {
    const name = 'Irina-';
    const result = validateUsername(name);

    expect(result).toBe(false);
  });

  test('numerals', () => {
    const name = '12345';
    const result = validateUsername(name);

    expect(result).toBe(false);
  });
});
