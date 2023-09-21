import operate from '../components/logics/operate';

describe('test operate function', () => {
  it('test the + operator', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  it('test the + operator', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });
  it('test the + operator', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  it('test the + operator', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
  it('test the + operator', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('test the + operator', () => {
    expect(operate(3, 2, '%')).toBe('1');
  });
});
