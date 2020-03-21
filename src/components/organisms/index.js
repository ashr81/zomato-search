import { lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const LocationModal = lazy(() => import('./LocationModal'))
const Navbar = lazy(() => import('./Navbar'));

export { 
  Layout, LocationModal, Navbar
}