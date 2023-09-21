import CalculatorButtons from "../components/CalculatorUI";
import renderer from 'react-test-renderer';

it('Test the calculator ui component', () => {
  const tree = renderer.create(<CalculatorButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});