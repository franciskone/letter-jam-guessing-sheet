import React, { ReactNode } from 'react';

import STYLE from './Solution.module.scss';
import { useInput } from '../useLetter';

interface SolutionProps {
  children?: ReactNode;
}

interface Item {
	type: 'dark' | 'light'
}

const Item = ({ type }: Item) => {
	const { value, updateValue } = useInput(false);

	const backgroundColorMap = {
		dark: '#CCCCCC',
		light: '#FFFFFF'
	}

	return (
		<div
			className={STYLE.Item}
			// style={{ backgroundColor: backgroundColorMap[type] }}
		>
			<input
				value={value}
				onChange={updateValue}
				style={{ backgroundColor: backgroundColorMap[type] }}
			/>
		</div>
	);
};

export const Solution = ({ children }: SolutionProps) => (
	<div className={STYLE.Container}>
		<div className={STYLE.Solution}>
			<Item type='light' />
			<Item type='light' />
			<Item type='light' />
			<Item type='light' />
			<Item type='light' />
			<Item type='light' />
			<Item type='light' />
		</div>
		<div className={STYLE.Solution}>
			<Item type='dark' />
			<Item type='dark' />
			<Item type='dark' />
			<Item type='dark' />
			<Item type='dark' />
			<Item type='dark' />
			<Item type='dark' />
		</div>
	</div>

);
