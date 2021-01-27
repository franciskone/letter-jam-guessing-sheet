import React from 'react';
import { Container, Row } from 'react-grid-system';
import { GuessingSheetScreen } from './features/GuessingSheet';

const App = () => (
	<Container>
		<Row justify="center">
			<h1>Letter Jam</h1>
		</Row>

		<GuessingSheetScreen />
	</Container>
);

export default App;
