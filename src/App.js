import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Rewards from './components/Rewards';
import Home from './components/Home';
import { getCapOne } from './API';
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

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Rewards</Menu.Item>
    </Container>
  </Menu>
) 

export default class HomepageLayout extends Component {
  constructor(){
    super()
    this.state={
      activeItem: 'Home',
      rewards: []
    }
  }
  // state = {}
  handleItemClick = (e, { name }) =>{
    console.log('name: ' + name)
    this.setState({ activeItem: name })
    console.log('State is :' + this.state)
  }
  componentDidMount(){
    getCapOne().then(result => {
      this.setState({ rewards: result.data.rewardsAccounts})
      console.log(this.state.rewards);
    })
  }

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible, activeItem } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em'}}
            vertical
          >
            <Container>
            <BrowserRouter>
            <Switch>
              <Menu inverted pointing>
                <Menu.Item as={Link} to='/Home' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item>
                <Menu.Item as={Link} to='/Rewards' name='Rewards' active={activeItem === 'Rewards'} onClick={this.handleItemClick}>Rewards</Menu.Item>
              </Menu>
              <Route
                path='/Home'
                component={Home}
                />
                <Route
                path='/Rewards'
                render = {(props) => (
                  <Rewards {...props}
                  />
                  )}
                />
                </Switch>
                </BrowserRouter>
            </Container>
            </Segment>
            <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em', background: 'blue' }}
            vertical>
            {this.state.activeItem === 'Home' &&
          <Home />
        }
        {this.state.activeItem === 'Rewards' &&
          <Rewards
            rewards={this.state.rewards}
          />
        }
            
            </Segment>
            <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em', background: 'white' }}
            vertical>
            <Container>
            <img src='https://timedotcom.files.wordpress.com/2015/10/bestbanks_capitalone.png?w=814' width="400"/>
            </Container>
            
          </Segment>
        </Visibility>


        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Capital One</List.Item>
                    <List.Item as='a'>DevExchange</List.Item>
                  </List>
                </Grid.Column>
               
                <Grid.Column width={7}>
                  <Header as='h4' inverted>This is a work in progress</Header>
                  <p>We are new to this and further development is needed.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

// export default App;
