import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Letter Jam header', () => {
	render(<App />);
	const linkElement = screen.getByText(/Letter Jam/i);
	expect(linkElement).toBeInTheDocument();
});
