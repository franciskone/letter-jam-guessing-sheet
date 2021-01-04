import React, { useState } from 'react';
import STYLE from './SuggestionItem.module.scss';
import { Col } from 'react-grid-system';
import { useInput } from '../useLetter';

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
	type: 'number' | 'text';
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
		allowMultipleLetters = false,
		type
	}: SuggestionItemProps
) => {
	const { value, updateValue } = useInput(allowMultipleLetters);

	return (
		<Col className={STYLE.ItemCol} xs={width ?? 1} style={{ padding: 0,  }}>
			{fixedValue
				? <div className={STYLE.FixedContent}>{fixedValue}</div>
				: (
					<input
						value={value}
						onChange={updateValue}
						className={STYLE.InputContent}
						placeholder={placeholder}
						pattern={type === 'number' ? '\\d*' : '*'}
					/>
				)
			}

		</Col>
	);
};

