import React from 'react';
import PropTypes from 'prop-types';

const newMessage = {
	message: "I'm an object",
	title: 'True',
};

export const FirstApp = ({ title, subtitle }) => {
	return (
		<>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<p>Learning React: {JSON.stringify(newMessage, null, 4)}</p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	title: PropTypes.string,
};

FirstApp.defaultProps = {
	subtitle: 'Default Subtitle',
};
