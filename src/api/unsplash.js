import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID KdIelOeiU78orGAKBaoYtrmK8sBdjFnAoToM80ZAE8k',
  },
})
