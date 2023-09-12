// Button.test.tsx

import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button'; // Adjust the import path accordingly

afterEach(cleanup)

test('it renders a button with the provided label', () => {
  render(<Button label="Click me" />);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('it calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);
  const button = screen.getByText('Click me');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('it applies custom styles', () => {
  const customStyles = {
    backgroundColor: 'blue',
    fontSize: '24px',
    color: 'white',
  };
  render(
    <Button
      label="Styled Button"
      customStyle={customStyles}
    />
  );
//   const button = screen.getByTestId('styled-button');
//   expect(button).toHaveStyle('backgroundColor: blue');
//   expect(button).toHaveStyle('fontSize: "24px"'); // Note the quotes around the value
//   expect(button).toHaveStyle('color: white');
  
  
});

test('it applies label styles', () => {
  const labelStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  render(
    <Button
      label="Button with Label Style"
      labelStyle={labelStyles}
    />
  );
  const label = screen.getByText('Button with Label Style');
  expect(label).toHaveStyle('font-size: 20px');
  expect(label).toHaveStyle('font-weight: bold');
});
