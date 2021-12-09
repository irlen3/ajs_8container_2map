import ErrorRepository from '../errorRepository';

describe('test', () => {
  test('test function error', () => {
    const error1 = new ErrorRepository(1, 'error 1');
    const result = () => error1.translate(4);
    expect(result).toThrowError(new Error('Unknown error'));
  });

  test('test function get map', () => {
    const error1 = new ErrorRepository(1, 'error 1');
    const result = error1.translate(1);
    console.log(result);
    expect(result).toEqual('error 1');
  });
});
