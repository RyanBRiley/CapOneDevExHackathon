import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react';
import { getRewards } from '../API';
class Rewards extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    let id = event.target.id
    getRewards({id}).then(result =>{
      console.log(result)
    })
  }
  render() {
    return (
      <Item.Group divided>
        {this.props.rewards.map((reward, i) =>{
          return(
              <Item  key={reward.rewardsAccountReferenceId} onClick={this.handleClick} as='a' >
                <Item.Content id={reward.rewardsAccountReferenceId}>
                  <Item.Header >{reward.accountDisplayName}</Item.Header>
                    <Item.Description>{reward.creditCardAccount.network}</Item.Description>
                    <Item.Description>{reward.creditCardAccount.product}</Item.Description>
                </Item.Content>
              </Item>
          )
        })}
      </Item.Group>
    )
  }
}
export default Rewards;
