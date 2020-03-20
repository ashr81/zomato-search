import { lazy } from 'react';
import withSuspenseLoader from '../../../hocs/withSuspenseLoader';
import RestaurantsLoader from '../../../content-loaders/RestaurantsLoader';

const RestaurantsFilter = lazy(() => import(/* webpackPrefetch: true */'./Filter'));
const RestaurantsGridView = withSuspenseLoader(lazy(() => import(/* webpackPrefetch: true */'./GridView')), RestaurantsLoader);
const RestaurantsListElement = lazy(() => import(/* webpackPrefetch: true */'./ListElement'));
const RestaurantsModal = withSuspenseLoader(lazy(() => import(/* webpackPrefetch: true */'./Modal')));

export {
  RestaurantsFilter, RestaurantsGridView,
  RestaurantsListElement, RestaurantsModal
}