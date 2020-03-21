/**
 * To keep device data across view which is providers from
 * `withLocationDetails.js` and consumed through
 * custom-hook: `useLocationDetails.js`
 */
import { createContext } from 'react';

export const LocationDetailsContext = createContext({});

export default LocationDetailsContext;
