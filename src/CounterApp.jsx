import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ initialCounter = 0 }) => {
	const [counter, setCounter] = useState(initialCounter);

	const handleOnClick = () => {
		setCounter(counter + 1);
	};

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>

			<button onClick={handleOnClick}>+ 1</button>
		</>
	);
};

CounterApp.propTypes = {
	initialCounter: PropTypes.number.isRequired,
};
