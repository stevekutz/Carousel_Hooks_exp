import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Segment} from 'semantic-ui-react';
import {NavLink, Route} from 'react-router-dom';


function App() {
    return (
        <div className = 'navActive'>
            <div>
                <NavLink to = '/' exact> Home </NavLink> 
                <NavLink to = '/classic' exact> Classic </NavLink> 
                <NavLink to = '/hooks' exact> Hooks </NavLink> 
                <NavLink to = '/other' exact> Other </NavLink>    
            </div>
        </div>    
    
    );
}

export default App;
