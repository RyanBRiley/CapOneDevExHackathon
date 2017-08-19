import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react';
import { getRewards } from '../API';
class Redemption extends Component {
  constructor() {
    super()
  }
  render() {
    const { redeem } = this.props
    return (
      <div>
        {console.log(redeem)}
        <Item>
        <Item.Content>
          <Item.Header >{redeem.accountDisplayName}</Item.Header>
            <Item.Description>{redeem.rewardsBalance} {redeem.rewardsCurrency}</Item.Description>
            <Item.Description></Item.Description>
        </Item.Content>
        </Item>
      </div>
    )
  }
}
export default Redemption;
