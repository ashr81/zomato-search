/**
 * To keep device data across view which is providers from
 * `withContextProvidersHOC.tsx` and consumed through
 * custom-hook: `useDeviceDetails.tsx`
 */
import { createContext } from 'react';

export const LocationDetailsContext = createContext({});

export default LocationDetailsContext;
