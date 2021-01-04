import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Suggestions } from './components/Suggestions';
import { Solution } from './components/Solution';

export const GuessingSheetScreen = () => {
	return (
		<Container>
			<Solution />
			<Row gutterWidth={100}>
				<Col xs={12} lg={6}>
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
				</Col>
				<Col xs={12} lg={6}>
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
					<Suggestions />
				</Col>
			</Row>
		</Container>
	)
};
