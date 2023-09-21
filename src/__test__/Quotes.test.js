import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

test('Test the Quotes component', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
