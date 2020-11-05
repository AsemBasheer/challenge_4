import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        };
    }

    clicked(i) {
        let iB = i + 10
        while (iB < 70) {
            let btn = document.getElementById(`${iB}`)
            if ((btn.classList.contains("w3-red")) || (btn.classList.contains("w3-blue"))) {
                this.draw(i)
                return
            }
            i += 10
            iB += 10
        }
        this.draw(i)
    }

    draw(i) {
        let btn = document.getElementById(`${i}`)
        if (this.state.color === "red") {
            btn.classList.add("w3-red")
            this.setState({ color: "blue" })
        } else {
            btn.classList.add("w3-blue")
            this.setState({ color: "red" })
        }
        this.win(i)
    }

    win(id) {
        let connect = true
        for (let i = id; i < id + 4; i++) {
            let btn = document.getElementById(`${i}`)
            if (this.state.color === "red" && (!btn.classList.contains("w3-red"))) {
                connect = false
                // console.log(this.state.color,btn.classList.contains("w3-red"))
            }
            if (this.state.color === "blue" && (!btn.classList.contains("w3-blue"))) {
                connect = false
                // console.log(this.state.color,btn.classList.contains("w3-blue"))
            }
        }
        console.log("win ?", connect)
    }

    render() {

        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="11" onClick={() => { this.clicked(11) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="12" onClick={() => { this.clicked(12) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="13" onClick={() => { this.clicked(13) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="14" onClick={() => { this.clicked(14) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="15" onClick={() => { this.clicked(15) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="16" onClick={() => { this.clicked(16) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="17" onClick={() => { this.clicked(17) }} ></button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="21" onClick={() => { this.clicked(21) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="22" onClick={() => { this.clicked(22) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="23" onClick={() => { this.clicked(23) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="24" onClick={() => { this.clicked(24) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="25" onClick={() => { this.clicked(25) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="26" onClick={() => { this.clicked(26) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="27" onClick={() => { this.clicked(27) }} ></button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="31" onClick={() => { this.clicked(31) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="32" onClick={() => { this.clicked(32) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="33" onClick={() => { this.clicked(33) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="34" onClick={() => { this.clicked(34) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="35" onClick={() => { this.clicked(35) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="36" onClick={() => { this.clicked(36) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="37" onClick={() => { this.clicked(37) }} ></button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="41" onClick={() => { this.clicked(41) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="42" onClick={() => { this.clicked(42) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="43" onClick={() => { this.clicked(43) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="44" onClick={() => { this.clicked(44) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="45" onClick={() => { this.clicked(45) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="46" onClick={() => { this.clicked(46) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="47" onClick={() => { this.clicked(47) }} ></button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="51" onClick={() => { this.clicked(51) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="52" onClick={() => { this.clicked(52) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="53" onClick={() => { this.clicked(53) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="54" onClick={() => { this.clicked(54) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="55" onClick={() => { this.clicked(55) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="56" onClick={() => { this.clicked(56) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="57" onClick={() => { this.clicked(57) }} ></button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="61" onClick={() => { this.clicked(61) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="62" onClick={() => { this.clicked(62) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="63" onClick={() => { this.clicked(63) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="64" onClick={() => { this.clicked(64) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="65" onClick={() => { this.clicked(65) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="66" onClick={() => { this.clicked(66) }} ></button>
                        <button className="col-md-1 p-5 m-1 btn btn-light w3-circle" id="67" onClick={() => { this.clicked(67) }} ></button>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));