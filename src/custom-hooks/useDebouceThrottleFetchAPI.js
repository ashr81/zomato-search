/**
 * Custom Hook that makes an API call when the
 * loading flag is updated to true from where it is called.
 */
import { useEffect, useRef } from 'react';
import request from '../helpers/request';
import { toast } from 'react-tiny-toast';

const useDebouceThrottleFetchAPI = (
  value,
  options,
  onSuccess
)  => {
  const timeoutIdRef = useRef(null)
  useEffect(() => {
    window.clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = window.setTimeout(() => {
      if(value !== false) {
        (async function() {
          try {
            const response = await request(options)
            onSuccess(response)
          } catch(err) {
            toast.show(err.message, { variant: 'danger' })
          }
        })();
      }
    }, 700)
  }, [value, timeoutIdRef])
  return { value }
}

export default useDebouceThrottleFetchAPI;