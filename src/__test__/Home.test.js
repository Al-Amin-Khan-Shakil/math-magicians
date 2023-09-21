import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Test the Home Component', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
