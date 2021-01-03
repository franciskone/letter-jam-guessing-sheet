import React, { ReactNode } from 'react';
import { Row } from 'react-grid-system';
import { SuggestionItem } from './SuggestionItem';

interface SuggestionsProps {
  children?: ReactNode;
}

export const Suggestions = ({ children }: SuggestionsProps) => (
	<Row justify="center" style={{ marginBottom: '1rem' }} >
		<SuggestionItem placeholder="#" type="number"/>
		<SuggestionItem placeholder="1" type="text" />
		<SuggestionItem placeholder="2" type="text" />
		<SuggestionItem placeholder="3" type="text" />
		<SuggestionItem placeholder="4" type="text" />
		<SuggestionItem placeholder="5" type="text" />
		<SuggestionItem placeholder="6" type="text" />
		<SuggestionItem placeholder="7" type="text" />
		<SuggestionItem placeholder="8" type="text" />
		<SuggestionItem
			placeholder="9..."
			width={3}
			allowMultipleLetters
			type="text"
		/>
		<SuggestionItem
			placeholder="???"
			width={12}
			allowMultipleLetters
			type="text"
		/>
	</Row>
);
