import React from 'react';
// import { render } from '@testing-library/react';
import Animal from './Animal';
import renderer from "react-test-renderer";
import animalData from "./data.js";
test('renders Animal.js correctly', () => {
  const tree = renderer
  .create(<Animal animal={animalData} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});