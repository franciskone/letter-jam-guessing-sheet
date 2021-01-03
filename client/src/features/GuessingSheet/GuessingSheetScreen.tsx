import React, { ReactNode } from 'react';
import { AvailableLetters } from './components/AvailableLetters';
import { Container, Row, Col } from 'react-grid-system';

export const GuessingSheetScreen = () => (
	<Container>
		<Row>
			<AvailableLetters />
		</Row>
	</Container>
);
