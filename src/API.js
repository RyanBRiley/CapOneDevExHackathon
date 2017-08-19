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
  return axios.get(REWARDS_URL, user)
}