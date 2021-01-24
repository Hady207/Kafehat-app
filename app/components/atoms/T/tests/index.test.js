import React from 'react';
import renderer from 'react-test-renderer';
import T from '../index';

it('renders correctly across screens', () => {
  const tree = renderer.create(<T />).toJSON();
  expect(tree).toMatchSnapshot();
});
