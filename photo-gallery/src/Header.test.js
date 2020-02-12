import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import Header from './Header'
import renderer from "react-test-renderer";
test('renders App.js correctly', () => {
  const tree = renderer
  .create(<Header />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});