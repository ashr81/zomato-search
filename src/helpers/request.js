import axios from 'axios';

const request = (options) => {
  const { headers, ...restOptions } = options;
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      accept: 'application/json',
      ...headers
    }
  })
  return client(restOptions);
}

export default request;