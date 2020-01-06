import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Segment} from 'semantic-ui-react';
import {NavLink, Route} from 'react-router-dom';
import avengerInfo from './data/avengerInfo';
import {useState} from 'reinspect';

import LandingPage from './components/LandingPage';
import AvengerCarousel from './components/AvengerCarousel';
import AvengerHookCarousel from './components/AvengerHookCarousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
    const [isActive, setIsActive] = useState(false, "isActive State");

// <i className = 'isactive' className="fas fa-bars"></i>

    return (
        <div>


            <div className = 'navActive'>
                <div>
                    <NavLink to = '/' exact> Home </NavLink> 
                    <NavLink to = '/classic' exact> Classic </NavLink> 
                    <NavLink to = '/hooks' exact> Hooks </NavLink> 
                    <NavLink to = '/other' exact> Other </NavLink>    
                </div>
                <div onClick = {() => setIsActive(!isActive)}> toggle
                </div>
                
                
                {isActive 
                    ? <div>                        
                        <span> Active TRUE  <i class = "fas fa-bars"></i> </span>
                      </div>
                    : <div>
                        <p> Active false  </p>
                      </div> 
                }                
                </div>
            {/*    
                <div onClick = {() => setIsActive(!isActive)}>
                    {isActive 
                        ? <i class = "fas fa-bars"></i>
                        : <i class = "fas fa-grimace"></i>
                    }                
                </div>
            */}    

            <div>    
                <Route
                    exact path = '/' 
                    render = { (props) => <LandingPage {...props} landingProp = {` the Landing Page`} />}
                />
        
                <Route
                    exact path = '/classic' 
                    render = { (props) => 
                    <AvengerCarousel 
                        {...props} 
                        avengerProps = {avengerInfo}
                        carouselProp = {` the Carousel Page`} 
                    />}
                />
        
                <Route
                    exact path = '/hooks' 
                    render = { (props) => 
                        <AvengerHookCarousel 
                        {...props} 
                        avengerProps = {avengerInfo}
                        carouselHookProp = {` the Hook Carousel Page`} 
                        />}
                />
            
            </div>    
        </div>                      


    );
}

export default App;
