import React from 'react';

const Input = (props) => {
	let inputElement = null;

	switch (props.inputType ) {
	case ('input'):
		inputElement = <input />;
		break;
	case ('textarea'):
    inputElement = <textarea />;
    break;

	}
	return (
		<div>
			<label>{props.label}</label>
		</div>
	);
};

export default Input;
