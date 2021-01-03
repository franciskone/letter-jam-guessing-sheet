import React, { ReactNode } from 'react';
import { AvailableLetters } from './components/AvailableLetters';
import { Container, Row, Col } from 'react-grid-system';
import { Suggestions } from './components/Suggestions';

export const GuessingSheetScreen = () => {
	return (
		<Container>
			{/*<Row justify='center'>*/}
			{/*	<Col sm={12} lg={12} xl={8}>*/}
			{/*		<AvailableLetters locale="it-IT" />*/}
			{/*	</Col>*/}
			{/*</Row>*/}
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
