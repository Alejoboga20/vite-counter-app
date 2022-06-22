import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

const title = 'Test Title';
const subtitle = 'Test Subtitle';

describe('Test First App', () => {
	/* 	test('should match snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	}); */

	test('should show title in h1', () => {
		const { getByText, getByTestId } = render(<FirstApp title={title} />);

		expect(getByText(title)).toBeTruthy();
		expect(getByTestId('test-title').innerHTML).toBe(title);
	});

	test('should show subtitle from props', () => {
		const { getByText } = render(<FirstApp title={title} subtitle={subtitle} />);
		expect(getByText(subtitle)).toBeTruthy();
	});
});
