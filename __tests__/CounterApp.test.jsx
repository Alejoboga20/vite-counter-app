import { fireEvent, render, screen } from '@testing-library/react';
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

	test('should add +1', () => {
		render(<CounterApp initialCounter={10} />);

		fireEvent.click(screen.getByText('+ 1'));
		expect(screen.getByText(11)).toBeTruthy();
	});

	test('should substract -1', () => {
		render(<CounterApp initialCounter={10} />);

		fireEvent.click(screen.getByText('- 1'));
		expect(screen.getByText(9)).toBeTruthy();
	});

	test('should reset counter', () => {
		render(<CounterApp initialCounter={0} />);
		fireEvent.click(screen.getByText('+ 1'));
		fireEvent.click(screen.getByText('+ 1'));
		fireEvent.click(screen.getByText('+ 1'));

		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
		expect(screen.getByText(0)).toBeTruthy();
	});
});
