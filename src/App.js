import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Rewards from './components/Rewards';
import Home from './components/Home';

import { Input, Menu, Segment } from 'semantic-ui-react'

class App extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Menu pointing>
          <Menu.Item as={Link} to='/Home' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/Rewards' name='Rewards' active={activeItem === 'Rewards'} onClick={this.handleItemClick} />
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
        {this.state.activeItem === 'Home' &&
          <Home />
        }
        {this.state.activeItem === 'Rewards' &&
          <Rewards />
        }
      </div>
    )
  }
}

export default App;
