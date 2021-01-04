import { useState } from 'react';

export const useInput = (allowMultipleLetters: boolean) => {
	const [value, setValue] = useState('');

	const updateValue = (evt: any) => {
		const { target: { value } } = evt;
		setValue(allowMultipleLetters ? value : value.charAt(value.length - 1));
	};

	return { value, updateValue };
};
