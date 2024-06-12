import './App.css';
import { TextField } from './components/text-fild/TextField';

function App() {
	return (
		<div className="App">
			<TextField id='txt' type='text' labelText='Login' />
			<TextField id='pass' type='password' labelText='Password' />
		</div>
	);
}

export default App;
