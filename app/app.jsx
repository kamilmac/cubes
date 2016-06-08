import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import 'whatwg-fetch';

import DevTools from 'mobx-react-devtools';

const appState =  new class AppState {
    @observable timer = 0;
    
    constructor() {
        // setInterval(() => {
            fetch('http://respondto.it/', {
                method: 'GET'
            })
            .then(function(r){
                console.log(r.json())
                // let a = r.json();
                // appState.timer = a.body.status;
            })

        // }, 1000);
    }
    
    resetTimer() {
        this.timer = 0;
    }
}();

@observer
class TimerView extends Component {
     render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <Hell class="hello" timer={this.props.appState.timer} />
                <Hell timer={this.props.appState.timer} />
                <Hell timer={this.props.appState.timer} />
                <DevTools />
            </div>
        );
     }

     onReset = () => {
     	this.props.appState.resetTimer();
     }
};
const Hell = (props) => <h1>HELLO {props.timer}</h1>;

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('app'));
