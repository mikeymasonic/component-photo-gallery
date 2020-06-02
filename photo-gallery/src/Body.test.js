import React from 'react';
import Body from './Body'
import renderer from "react-test-renderer";

test('renders Animal.js correctly', () => {
  const tree = renderer
  .create(<Body />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
