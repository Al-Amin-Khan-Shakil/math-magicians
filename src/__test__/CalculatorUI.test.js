import renderer from 'react-test-renderer';
import CalculatorButtons from '../components/CalculatorUI';

it('Test the calculator ui component', () => {
  const tree = renderer.create(<CalculatorButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
