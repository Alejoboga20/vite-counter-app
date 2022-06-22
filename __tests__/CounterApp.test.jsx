import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

const initialCounter = 100;

describe('Counter App Tests', () => {
	test('should match snapshot', () => {
		const { container } = render(<CounterApp initialCounter={initialCounter} />);
		expect(container).toMatchSnapshot();
	});

	test('should initi with initial counter', () => {
		render(<CounterApp initialCounter={initialCounter} />);
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			initialCounter.toString()
		);
	});
});
