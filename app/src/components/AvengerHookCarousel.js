import React, {useState, memo} from 'react';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';


const AvengerHookCarousel = (props) => {
    console.log(props);
    const[currentAvenger, changeCurrentAvenger] = useState(0);

    const avengers  = props.avengerProps;

    const avengerInc = () => {


        if(currentAvenger === 8) {
            changeCurrentAvenger(currentAvenger => 0);
        } else {
            changeCurrentAvenger(currentAvenger => currentAvenger + 1);           
        }

    }  



    const avengerDec = () => {

        let totalLength = props.avengerProps.length;

        if(currentAvenger === 0) {
            changeCurrentAvenger(currentAvenger => 8);
        } else {
            changeCurrentAvenger(currentAvenger => currentAvenger - 1);
            
        }
        console.log(totalLength, currentAvenger);
    }    


    return (
        <div>
            
            <Card style = {{border: '1px solid deeppink', margin: `10px auto`, padding: `15px`}}>
                <Segment style = {{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Button onClick = {avengerDec}> previous </Button>
                    <Button onClick = {avengerInc}> next </Button>
                </Segment>

                <Card.Header style = {{fontWeight: 'bolder'}}> {props.carouselHookProp}</Card.Header>
                <Card.Content>{avengers[currentAvenger].name}</Card.Content>
                <Card.Content>{avengers[currentAvenger].nickname}</Card.Content>
                <CurrentAvenger currentAvenger = {currentAvenger}/>   
                <Image centered style = {{borderRadius: `50%`}} 
                                    src = {avengers[currentAvenger].thumbnail}  alt = {props.avengerProps[currentAvenger].name}  />
                <Label>Card Content used</Label>
                <Card.Content> {avengers[currentAvenger].description} </Card.Content>
                <Label>Card Description used</Label> 
                <Card.Description> {avengers[currentAvenger].description} </Card.Description>                    
            </Card>
                
        </div>
    );


};

const CurrentAvenger = ({currentAvenger}) => {
    // const avengers  = props.avengerProps;
    return (
        <div style = {{border: '1px solid blue' , margin: '2px auto', width: '30%'}}>

                <div style = {{textAlign: 'center'}}> {currentAvenger} </div>     

        </div>
    )

};


export default AvengerHookCarousel;
