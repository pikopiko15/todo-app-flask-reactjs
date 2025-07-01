import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing jest-dom for custom matchers
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';

describe('Card UI Components', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    jest.resetModules();
  });

  it('renders Card with children', () => {
    const { getByText } = render(<Card>Test Card</Card>);
    expect(getByText('Test Card')).toBeInTheDocument();
  });

  it('renders CardHeader with children', () => {
    const { getByText } = render(<CardHeader>Header</CardHeader>);
    expect(getByText('Header')).toBeInTheDocument();
  });

  it('renders CardTitle with children', () => {
    const { getByText } = render(<CardTitle>Title</CardTitle>);
    expect(getByText('Title')).toBeInTheDocument();
  });

  it('renders CardDescription with children', () => {
    const { getByText } = render(<CardDescription>Description</CardDescription>);
    expect(getByText('Description')).toBeInTheDocument();
  });

  it('renders CardContent with children', () => {
    const { getByText } = render(<CardContent>Content</CardContent>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('renders CardFooter with children', () => {
    const { getByText } = render(<CardFooter>Footer</CardFooter>);
    expect(getByText('Footer')).toBeInTheDocument();
  });
});
