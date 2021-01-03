import React, { useState } from 'react';
import STYLE from './SuggestionItem.module.scss';
import { Col } from 'react-grid-system';

enum Color {
	WHITE = 'white',
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  LIGHT_GREEN = 'lightGreen',
  DARK_GREEN = 'darkGreen',
  BLUE = 'blue',
  PURPLE = 'purple',
  VIOLET = 'violet',
  GRAY = 'gray',
}
interface SuggestionItemProps {
  placeholder?: string;
  fixedValue?: string;
  width?: number;
  allowMultipleLetters?: boolean;
}

export const SuggestionItem = (
	{
		placeholder,
		fixedValue,
		width,
		allowMultipleLetters
	}: SuggestionItemProps
) => {
	const [value, setValue] = useState('');

	const updateValue = (evt: any) => {
		const { target: { value } } = evt;
		setValue(allowMultipleLetters ? value : value.charAt(value.length - 1));
	};

	return (
		<Col className={STYLE.ItemCol} xs={width ?? 1} style={{ padding: 0 }}>
			{fixedValue
				? <div className={STYLE.FixedContent}>{fixedValue}</div>
				: <input
					value={value}
					onChange={updateValue}
					className={STYLE.InputContent}
					type="text"
					placeholder={placeholder}
				/>
			}

		</Col>
	);
};

