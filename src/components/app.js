import { h } from 'preact';
import { Router } from 'preact-router';
import Redirect from './Redirect'

// Code-splitting is automated for `routes` directory
import Voice from '../routes/voice';

const App = () => (
	<div id="app">
		<Router>
			<Redirect path="/" to="/voice" />
			<Voice path="/voice" />
		</Router>
	</div>
)

export default App;
