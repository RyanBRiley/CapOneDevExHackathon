import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react';
import { getRewards } from '../API';
import Redemption from './Redemption'
class Rewards extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state={
      singleReward: false,
      redeem: {}
    }
  }
  handleClick(event){
    event.preventDefault();
    let id = event.target.id
    getRewards(id).then(result =>{
      console.log(result);
      this.setState({ redeem: result.data,
      singleReward: true})
    })
  }
  render() {
    return (
      <div>
      {!this.state.singleReward &&
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
      }
      {this.state.singleReward &&
        <Redemption
          redeem={this.state.redeem}
        />
      }
      </div>
    )
  }
}
export default Rewards;
