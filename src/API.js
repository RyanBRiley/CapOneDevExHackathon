import axios from 'axios'
const AUTH = 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicGNrIjoxLCJhbGciOiJkaXIiLCJ0diI6Miwia2lkIjoiYTdxIn0..Q8EPUTo189PyagVaeXKw9XgvYN1pEz5Vgp1bgF4Hj9TE2anFkmGILcf7UX9iO6L0cUTgJQm3blatkUZUyUKc6cHFyyuVPKmtZDIU2zmP6VEhxmroUfeqh8YJnOEw9LRVKU1Pq4fVRuZMsIM1Mf6F2oMOAFL8JTw7AK4CQVUWtti4KHaNBtDX9cHOuwRtDbKhQbmySLP0g5ENzrC9gWMLprmq66hX5bI4TAiF2f7KlgjtT9lvph9pLyDsfBhtOanWj6gVmYMqxcNQlUHcgtsH3nlthX1PsOKQppDtmS09hPELzTxEn2kxk2btJ0KPy2iQFQyDSWfER1xgJnFDASr1sg8MNeQh3Qjmp4vuruQMimu1IFVvb1cIsIDS7cWPCUPa2UFYz9YfW1uXVnUpOyZTCWZ3E28YL70Rn2TbP4Hw030rgBWF5Ok1YD51e7BWJXXCq1lIWUG85WmjWZ5Il4nVNZBxBFDPR7lQMG2Gw36ibffzfTDwwHfWhlpkmbqtRLawKEVtYNDcpIvocujQJFHlwCRJ9uex5BXJzQQ6Mrp1cvxp3sp65mU5EPSU4J1OK0Iuj8Yv.I3YRuEIDtnqtHjjjrb9OK0A';
const API_URL = 'https://denver-hack-server.herokuapp.com';
const POST_URL = 'https://api.devexhacks.com';
const REWARDS_URL = 'https://api.devexhacks.com/rewards/account/';

export const getCapOne = () => {
    return axios.get(API_URL)
  }

export const getRewards = (data) => {
  console.log(`${API_URL}${data}`);
  return axios.get(`https://denver-hack-server.herokuapp.com/+jaR3Du6APE+x4kQue7NB76pzE2EghQD5frCU8NquuYUCjno3GzJDe6bKPmH9nruRwMPivkpoT+3PCwGfwJavg==`)
}
// export const addCapOne = (data) => {
//   return axios.post(POST_URL, data)
// }
// export const getRewards = () => {
//   var rewards_request = '${REWARDS_URL}?Authorization=${AUTH}';
//   return axios.get(rewards_request)
// }
// export const getAcctDetail = (acct_id) => {
//   var acct_request = '${REWARDS_URL}${acct_id}?Authorization=${AUTH}?'
//   return axios.get(acct_request)
// }
