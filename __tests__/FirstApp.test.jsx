import { render } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';

describe('Test First App', () => {
	test('should match snapshot', () => {
		render(<FirstApp title='Test Title' />);
	});
});
