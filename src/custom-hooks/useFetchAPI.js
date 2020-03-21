/**
 * Custom Hook that makes an API call when the
 * loading flag is updated to true from where it is called.
 */
import { useEffect } from 'react';
import { toast } from 'react-tiny-toast';
import request from '../helpers/request';

const useFetchAPI = (
  isLoading, options,
  onSuccess, onError,
) => {
  useEffect(() => {
    if (isLoading) {
      // when options is an array. multiple api calls are required.
      if (Array.isArray(options)) {
        Promise
          .all(options.map((option) => request(option)))
          .then(onSuccess)
          .catch((err) => {
            toast.show(err.message, { variant: 'danger' });
            onError && onError(err)
          });
      } else {
        // when options are object. only single API call is enough.
        (async function () {
          try {
            const response = await request(options);
            onSuccess(response);
          } catch (err) {
            toast.show(err.message, { variant: 'danger' });
            onError && onError(err);
          }
        }());
      }
    }
  }, [isLoading]);
  return { isLoading };
};

export default useFetchAPI;
