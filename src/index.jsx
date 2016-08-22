import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<h1>Hello World!!!</h1>
        	</div>
        );
    }
}

ReactDOM.render(<Chat/>,document.querySelector('#root'))