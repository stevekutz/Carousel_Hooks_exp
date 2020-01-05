import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Segment} from 'semantic-ui-react';
import {NavLink, Route} from 'react-router-dom';
import avengerInfo from './data/avengerInfo';

import LandingPage from './components/LandingPage';
import AvengerCarousel from './components/AvengerCarousel';
import AvengerHookCarousel from './components/AvengerHookCarousel';

function App() {
    return (
        <div>


            <div className = 'navActive'>
                <div>
                    <NavLink to = '/' exact> Home </NavLink> 
                    <NavLink to = '/classic' exact> Classic </NavLink> 
                    <NavLink to = '/hooks' exact> Hooks </NavLink> 
                    <NavLink to = '/other' exact> Other </NavLink>    
                </div>

            </div>

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
