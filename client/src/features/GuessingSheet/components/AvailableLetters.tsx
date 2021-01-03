import React, { ReactNode } from 'react';
import { letters } from '../config';
import STYLE from './AvailableLetters.module.scss';

interface AvailableLettersProps {
  children?: ReactNode;
}

const localeLetters = letters['it-IT'];

export const AvailableLetters = ({ children }: AvailableLettersProps) => (
  <ul className={STYLE.List}>
    {
      localeLetters.map(letter => (
        <li className={STYLE.Item} key={letter}>{letter}</li>
      ))
    }
  </ul>
);
