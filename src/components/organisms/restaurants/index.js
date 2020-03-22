import { lazy } from 'react';
import withSuspenseLoader from '../../../hocs/withSuspenseLoader';
import RestaurantsLoader from '../../../content-loaders/RestaurantsLoader';
import SearchListLoader from '../../../content-loaders/SearchListLoader';

const RestaurantsFilter = lazy(() => import(/* webpackPrefetch: true */'./Filter'));
const RestaurantsGridView = withSuspenseLoader(lazy(() => import(/* webpackPrefetch: true */'./GridView')), RestaurantsLoader);
const RestaurantsListElement = withSuspenseLoader(lazy(() => import(/* webpackPrefetch: true */'./ListElement')), SearchListLoader);
const RestaurantsModal = withSuspenseLoader(lazy(() => import(/* webpackPrefetch: true */'./Modal')));

export {
  RestaurantsFilter, RestaurantsGridView,
  RestaurantsListElement, RestaurantsModal,
};
