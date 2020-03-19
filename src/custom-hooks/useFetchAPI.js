/**
 * Custom Hook that makes an API call when the
 * loading flag is updated to true from where it is called.
 */
import { useEffect } from 'react';
import request from '../helpers/request';

const useFetchAPI = (
  isLoading,
  options,
  onSuccess
)  => {
  useEffect(() => {
    if(isLoading) {
      // when options is an array. multiple api calls are required.
      if(Array.isArray(options)) {
        Promise
          .all(options.map(option => request(option)))
          .then(onSuccess)
          .catch((err) => {
            window.alert(err.message)
          })
      } else {
        // when options are object. only single API call is enough.
        (async function() {
          try {
            const response = await request(options)
            onSuccess(response)
          } catch(err) {
            window.alert(err.message);
          }
        })();
      }
    }
  }, [isLoading])
  return { isLoading }
}

export default useFetchAPI;