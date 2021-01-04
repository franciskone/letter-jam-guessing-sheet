import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { GuessingSheetScreen } from './features/GuessingSheet';

function App() {
	return (
		<Container>
			<Row justify="center">
				<h1>Letter Jam</h1>
			</Row>

			<GuessingSheetScreen />
		</Container>
	);
}

export default App;
