import React, { ReactNode } from 'react';
import { Row } from 'react-grid-system';
import { SuggestionItem } from './SuggestionItem';

interface SuggestionsProps {
  children?: ReactNode;
}

export const Suggestions = ({ children }: SuggestionsProps) => (
	<Row justify="center" style={{ marginBottom: '1rem' }} >
		<SuggestionItem placeholder="#" />
		<SuggestionItem placeholder="1" />
		<SuggestionItem placeholder="2" />
		<SuggestionItem placeholder="3" />
		<SuggestionItem placeholder="4" />
		<SuggestionItem placeholder="5" />
		<SuggestionItem placeholder="6" />
		<SuggestionItem placeholder="7" />
		<SuggestionItem placeholder="8" />
		<SuggestionItem placeholder="9..." width={3} allowMultipleLetters />
		<SuggestionItem placeholder="???" width={12} allowMultipleLetters />
	</Row>
);
