import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({
  adapter: new Adapter()
});

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('a contains Learn React',() => {
    expect(wrapper.find('a').text()).toBe('Learn React');
  });
  it('equals to the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  });
  it('equals to the snapshot as Json',() => {
    const wrapperForSnapshot = shallow(
      <strong>Hello World!</strong>
    );
    expect(toJson(wrapperForSnapshot)).toMatchSnapshot();
  });
});
