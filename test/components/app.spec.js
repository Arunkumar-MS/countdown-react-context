import App  from '../../src/components/app';

describe('<App />', () => {
  test('should render App Component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});