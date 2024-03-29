'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './counter';

describe('counter tests', () => {
  it('can initially render', () =>{
    // Arrange
    let app = shallow(<Counter />);
    
    // Assert
    expect(app.find('section.counter').exists()).toBe(true);
  });

  it('has a counter that starts at 0', () => {
    // Arrange
    let app = shallow(<Counter />);
    
    // Assert
    expect(app.state('count')).toBe(0);
  });

  it('can increment upwards', () => {
    // Arrange
    let app = shallow(<Counter />);
    let upButton = app.find('button.up');
    expect(upButton.exists()).toBe(true);
    expect(upButton.text()).toBe('You\'ve followed the rules. One more present.');

    // Act
    upButton.simulate('click');

    // Assert
    expect(app.state('count')).toBe(1);
  });

  it('can decrement downwards', () => {
    // Arrange
    let app = shallow(<Counter />);
    let downButton = app.find('button.down');
    expect(downButton.exists()).toBe(true);
    expect(downButton.text()).toBe('You\'ve been naughty. One less present.');

    // Act
    downButton.simulate('click');

    // Assert
    expect(app.state('count')).toBe(-1);
  });

  it('renders consistently', () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
  });
});
