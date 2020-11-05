import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <img src="https://miro.medium.com/max/1200/1*Eyt1T-FH2FSo2e1syR8ubQ.png" width="700rem"></img>
                <button className="m-1 w3-button w3-red" >Checkout</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));