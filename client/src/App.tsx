import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { GuessingSheetScreen } from './features/GuessingSheet';

function App() {
	return (
		<Container>
			<h1>Letter Jam</h1>
			<GuessingSheetScreen />
		</Container>
	);
}

export default App;
