/**
 * Path/Routes to public paths. No authorization is required.
 */
import React, { lazy } from 'react';
import withSuspenseLoader from '../hocs/withSuspenseLoader';
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));

export const HOME = '/';

export default [
  {path: HOME, component: HomePage, exact: true}
].map(({component, ...route}, index) => (
  <Route {...route} component={withSuspenseLoader(component)} key={index}/>
))