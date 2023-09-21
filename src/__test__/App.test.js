import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// eslint-disable-next-line arrow-body-style, no-unused-vars
const mockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

it('Test App component', () => {
  const tree = renderer.create(<mockApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
