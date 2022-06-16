import React from 'react';

const newMessage = {
	message: "I'm an object",
	title: 'True',
};

export const FirstApp = ({ title = 'Default Title Prop', subtitle = '' }) => {
	return (
		<>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<p>Learning React: {JSON.stringify(newMessage, null, 4)}</p>
		</>
	);
};
