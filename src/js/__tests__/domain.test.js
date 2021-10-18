import Character from '../domain';

describe('test checkErrorName', () => {
  test('checkErrorName min', () => {
    function result() {
      const player = new Character('p', 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });

  test('checkErrorName max', () => {
    function result() {
      const player = new Character('playersZombieGood', 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });

  test('checkErrorName string', () => {
    function result() {
      const player = new Character(123, 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });
});

describe('test checkErrorType', () => {
  test('checkErrorType name', () => {
    function result() {
      const player = new Character('player', 'Zombie1');
      player.checkErrorType();
    }

    expect(result).toThrowError(new Error('недопустимые значения типа'));
  });
});

test('test levelUp', () => {
  const player = new Character('player', 'Zombie');
  player.attack = 40;
  player.defence = 10;
  player.health = 10;

  player.levelUp();

  expect(player.level).toEqual(2);
  expect(player.attack).toEqual(48);
  expect(player.defence).toEqual(12);
  expect(player.health).toEqual(100);
});

test('levelUp throws error', () => {
  const player = new Character('player', 'Zombie');
  player.attack = 40;
  player.defence = 10;
  player.health = 0;

  function result() {
    player.levelUp();
  }

  expect(result).toThrowError(new Error('нельзя повысить левел умершего'));
});

describe('test damage', () => {
  test('test damage', () => {
    const player = new Character('player', 'Zombie');
    player.attack = 40;
    player.defence = 10;

    const points = 10;
    player.damage(points);

    expect();
    expect(player.health).toEqual(91);
  });

  test('test damage for health < 0', () => {
    const player = new Character('player', 'Zombie');
    player.health = -8;

    const points = 10;
    player.damage(points);

    expect(player.health).toEqual(-8);
  });
});
