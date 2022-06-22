import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

const title = 'Test Title';

describe('Test First App', () => {
	test('should match snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('should show title in h1', () => {
		const { getByText } = render(<FirstApp title={title} />);
		expect(getByText(title)).toBeTruthy();
	});
});
