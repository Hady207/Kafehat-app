// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../index';

test('renders correctly', () => {
  const tree = renderer.create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});
