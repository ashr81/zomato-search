/**
 * Custom Hook that makes an API call when the
 * value is not false and changed flag is updated to
 * true from where it is called.
 * Has debouce functionality inbuilt.
 */
import { useEffect, useRef } from 'react';
import { toast } from 'react-tiny-toast';
import request from '../helpers/request';

const useDebouceThrottleFetchAPI = (
  value, options,
  onSuccess, onError,
) => {
  const timeoutIdRef = useRef(null);
  useEffect(() => {
    window.clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = window.setTimeout(() => {
      if (value !== false) {
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
    }, 700);
  }, [value, timeoutIdRef]);
  return { value };
};

export default useDebouceThrottleFetchAPI;
