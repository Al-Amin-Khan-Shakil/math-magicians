import calculate from '../components/logics/calculate';

describe('test the calculate function', () => {
  test('test the AC button', () => {
    const obj = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual(obj);
  });

  test('test is number button 0', () => {
    const obj = {
      total: '0',
      next: '0',
      operation: null,
    };
    expect(calculate(obj, '0')).toStrictEqual({});
  });

  test('test is number button 2', () => {
    const obj = {
      total: '0',
      next: '3',
      operation: null,
    };
    expect(calculate(obj, '2')).toStrictEqual({ next: '32', total: null });
  });

  test('test is number button 5', () => {
    const obj = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '5')).toStrictEqual({ total: null, next: '5' });
  });

  test('if button is .', () => {
    const obj = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({ total: '0', next: '0.', operation: null });
  });

  test('if button is . and next 5', () => {
    const obj = {
      total: '0',
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({ total: '0', next: '5.', operation: null });
  });
});
