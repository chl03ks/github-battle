const React = require('react');
const ReactDOM = require('react-dom');
require('./main.css');

class App extends React.Component {
render() {
	return (
		<div>
			Hello World!
		</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);
