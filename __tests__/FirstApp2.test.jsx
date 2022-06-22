import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

const title = 'Test Title';
const subtitle = 'Test Subtitle';

describe('Test First App', () => {
	test('should match snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('should show title in h1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
	});

	test('should show subtitle from props', () => {
		render(<FirstApp title={title} subtitle={subtitle} />);
		expect(screen.getAllByText(subtitle).length).toBe(2);
	});
});
