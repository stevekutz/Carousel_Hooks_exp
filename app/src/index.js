import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateInspector} from 'reinspect';
import {BrowserRouter as Router} from 'react-router-dom';

const AppWrapper = () => {
    return (
        <StateInspector>
            <Router>
                <App/>
            </Router>
        </StateInspector>
    ) 

}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

