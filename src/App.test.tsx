import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Team Awesome heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Team Awesome/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/이름, 역할, MBTI로 검색해보세요/i);
  expect(searchInput).toBeInTheDocument();
});
