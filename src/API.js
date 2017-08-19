import axios from 'axios'
const API_URL = 'https://api.devexhacks.com';
const POST_URL = 'https://api.devexhacks.com';
const REWARDS_URL = 'https://api.devexhacks.com/rewards/account/';

export const getCapOne = () => {
    return axios.get(API_URL)
  }
export const addCapOne = (data) => {
  return axios.post(POST_URL, data)
}
export const getRewards = (user) => {
  var rewards_path = REWARDS_URL+user
  return axios.get(rewards_path)
}
export const getAcctDetail = (acct_id) => {
  var acct_path = REWARDS_URL+acct_id;
  return axios.get(acct_path)
}