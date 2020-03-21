/**
 * Axios wrapper to make API calls.
 */

import axios from 'axios';

const request = (options) => {
  const { headers, ...restOptions } = options;
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://developers.zomato.com/api/v2.1',
    headers: {
      accept: 'application/json',
      'user-key': process.env.REACT_APP_API_KEY,
      ...headers,
    },
  });
  return client(restOptions);
};

export default request;
