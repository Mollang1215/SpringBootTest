import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>1. 23</h1>
				<h1>2. Hello</h1>
			</div>
		)
	}
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));