import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

class Home extends Component {
  constructor() {
    super()
  }
  handleItemClick = (e, { name }) =>{
    console.log('name: ' + name)
    this.setState({ activeItem: name })
    console.log('State is :' + this.state)
  }
  render() {
    return (
      <center><div>
        <Container>

              <Header
                as='h1'
                content='Rewards++'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em', color:'white'}}
              />
              <Header
                as='h2'
                content='Get the most out of your Capital One rewards'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal', color: 'white'}}
              />
              <Button name='Rewards' primary size='huge' onClick={this.handleItemClick}>
                View your rewards
                <Icon name='right arrow' />
              </Button>
            </Container>
      </div></center>
    )
  }
}
export default Home;
