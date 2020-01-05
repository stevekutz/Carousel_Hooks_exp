import React from 'react';
import {Button, Container, Icon} from 'semantic-ui-react';

const LandingPage = (props) => {
    return (
        <div>
            <Container style = {{border: `1px solid blue`}}>
                <h3> {props.landingProp} </h3>
                <Container>
                    Landing Page
                </Container>    
                     
            
            </Container>

        </div>
    )
}

export default LandingPage;