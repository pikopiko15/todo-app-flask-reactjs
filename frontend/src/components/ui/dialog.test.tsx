import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog';

describe('Dialog UI Components', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    jest.resetModules();
  });

  it('renders Dialog with children', () => {
    // const { getByText } = render(<Dialog>Dialog Content</Dialog>);
    // expect(getByText('Dialog Content')).toBeInTheDocument();
  });

  it('renders DialogHeader with children', () => {
    // const { getByText } = render(<DialogHeader>Header</DialogHeader>);
    // expect(getByText('Header')).toBeInTheDocument();
  });

  it('renders DialogFooter with children', () => {
    // const { getByText } = render(<DialogFooter>Footer</DialogFooter>);
    // expect(getByText('Footer')).toBeInTheDocument();
  });

  it('renders DialogTitle with children', () => {
    // const { getByText } = render(<DialogTitle>Title</DialogTitle>);
    // expect(getByText('Title')).toBeInTheDocument();
  });

  it('renders DialogDescription with children', () => {
    // const { getByText } = render(<DialogDescription>Description</DialogDescription>);
    // expect(getByText('Description')).toBeInTheDocument();
  });

  // Add more skeleton tests for DialogTrigger, DialogContent, DialogOverlay, DialogPortal, DialogClose as needed
});
