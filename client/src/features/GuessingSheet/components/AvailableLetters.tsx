import React, { ReactNode } from 'react';
import { letters } from '../config';
import STYLE from './AvailableLetters.module.scss';

interface AvailableLettersProps {
  locale: string;
}

export const AvailableLetters = ({ locale }: AvailableLettersProps) => {
	const localeLetters = letters[locale];
	return (
		<ul className={STYLE.List}>
			{
				localeLetters.map(letter => (
					<li className={STYLE.Item} key={letter}>{letter}</li>
				))
			}
		</ul>
	)
};
