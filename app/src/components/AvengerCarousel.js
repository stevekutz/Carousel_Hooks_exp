import React from 'react';

import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu, Message, Segment} from 'semantic-ui-react';


import avengers from '../data/avengerInfo';

// mini tiny small medium large big huge massive
class AvengerCarousel extends React.Component {
    
        state =  {
            totalAvengers: avengers.length,
            currentAvenger: 0,
    }

    // Not here !!!!! 
    // const {currentAvenger, totalAvengers} = this.state;
  
    avengerInc = () => {
        console.log('inc fired');
        console.log('>> state ', this.state);
        console.log('avengers', avengers);

        if(this.state.currentAvenger === this.state.totalAvengers - 1 ) {
            this.setState({ currentAvenger:  0  })  
        } else {
            this.setState({ currentAvenger: this.state.currentAvenger + 1     })    
        }

        console.log(this.state.totalAvengers, this.state.currentAvenger);
        return this.state.currentAvenger;
    }


    avengerDec = () => {

        //const {currentAvenger, totalAvengers} = this.state;

        if(this.state.currentAvenger === 0) {
            this.setState({ currentAvenger:  8  })
        } else {

            // unsafe way way
            // this.setState({ currentAvenger: this.state.currentAvenger - 1     }) 

            // Better
            // this.setState(prevState => {
            //    return {currentAvenger: --prevState.currentAvenger }
            //  })
            
            // cleaner
            this.setState( prevState => ({currentAvenger: --prevState.currentAvenger}) )

            // don't work, bad syntax with missing ( ) around obj
            // this.setState( prevState => {currentAvenger: --prevState.currentAvenger} )

            // oldschool ES5 way 
            // this.setState( function(prevState) {
            //     return {currentAvenger: --prevState.currentAvenger}
            //     } 
            // )
            
            // don't work oldschool ES5 way with bad syntax, 
            // this.setState({ function(prevState) {
            //         return {currentAvenger: --prevState.currentAvenger}
            //     } 
            // })
            
        }
        console.log(this.state.totalAvengers, this.state.currentAvenger);
        return this.state.currentAvenger;
    }
    // <Button onClick = {this.avengerDec}> 
//  <button onClick = {() => {this.props.increment() }}>inc</button>

// red orange yellow olive green teal blue violet purple pink brown grey black facebook google plus instagram linkedin twitter vk youtub

    render() {
        const {currentAvenger} = this.state;
        return (
           <div>
           
            <Grid centered columns = '3' container padded >
                    
            <Menu style = {{display: 'flex', justifyContent: `space-evenly`}}>
                    
                    <Menu.Item>
                    <Button inverted color = 'red' onClick = { () => {this.avengerDec()} }>
                            <Icon name = 'hand point left' />  
                            Previous Avenger
                        </Button>
                    </Menu.Item>  
                    
                    <Menu.Item color =  'pink' style = {{display: 'flex', justifyContent: 'center', border: '1px solid purple'}}>
                        <div color = 'facebook'> {this.state.currentAvenger}</div>      
                    </Menu.Item>
                                    
                    <Menu.Item>
                        <Button inverted color = 'red' onClick = {this.avengerInc} > 
                            Next Avenger
                            <Icon name = 'hand point right' />  
                        </Button>
                    </Menu.Item> 
                                        
                    <Menu.Item>
                        <Button> 
                            <NavLink to  = '/avengers'> Avengers List </NavLink>
                                <Icon name = 'meh outline' />  
                        </Button>
                    </Menu.Item> 
                </Menu>
                </Grid>
                            
                <Container style = {{border: '1px solid red', margin: '100 auto'}}>              
                    <Grid centered columns = '3' container padded >
                                    
                        <Grid.Column width = '2' style = {{border: '1px solid grey'}}>
                        <Button inverted circular size = 'big' color = 'blue' icon = 'angle left'   onClick = {this.avengerDec}/> 
                        </Grid.Column>
                                        
                        <Grid.Column  width = '10' style = {{border: '1px solid green'}}>                  
                            <Image centered style = {{borderRadius: `50%`}} 
                                src = {avengers[currentAvenger].thumbnail}  alt = {avengers[currentAvenger].name} height = '500px' />
                                                
                                                {/*  style = {{ border: '1px solid deeppink', display: 'flex', justifyContent: 'space-around'}} */}
                                                {/*  style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}}  */}
                                                
                            <Container textAlign = 'center' style = {{margin: '10px'}}>
                                <Card centered>
                                    <Card.Header style = {{fontWeight: 'bold'}}>{avengers[currentAvenger].name} </Card.Header>
                                    <Image src = {avengers[currentAvenger].img} alt = {avengers[currentAvenger].name} height = '150px'/>
                                    <Container>{avengers[currentAvenger].nickname}</Container>
                                </Card>
                                <Card  centered> 
                                    <Card.Header style = {{fontWeight: 'bold'}}> Synopisis </Card.Header>    
                                    <Card.Description style = {{background: 'skyblue'}}>
                                            {avengers[currentAvenger].description}                     
                                    </Card.Description>                            
                                </Card>
                            </Container>
                        </Grid.Column>
                                        
                        <Grid.Column width = '2' style = {{border: '1px solid gray'}}>
                            <Button inverted circular size = 'big' color = 'blue' icon = 'angle right'   onClick = {this.avengerDec}/> 
                        </Grid.Column>
                                        
                                        
                    </Grid>
                            
                </Container>
                        
            </div>
            
                )
            }
        }
        
        export default AvengerCarousel;
        
        /*

                <Grid centered columns = '1' container padded >
                    <Image style = {{border: `1px solid green`}} 
                        src = {avengers[this.currentAvenger].img}  alt = {avengers[this.currentAvenger].name} height = '250px' />
                </Grid>
                
    
                <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                    <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                        <Card.Header style = {{fontWeight: 'bold'}}>{avengers[this.currentAvenger].name} </Card.Header>
                        <Image src = {avengers[this.currentAvenger].img} alt = {avengers[this.currentAvenger].name} height = '100px'/>
                        <Container>{avengers[this.currentAvenger].nickname}</Container>
                    </Card>
                    <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px', boxSizing: `border-box`}} > 
                        <Card.Header style = {{fontWeight: 'bold'}}> Synopisis </Card.Header>    
                        <Card.Description style = {{background: 'pink'}}>
                                {avengers[this.currentAvenger].description}                     
                        </Card.Description>
                    
                    </Card>
                
                </Container>  

*/
