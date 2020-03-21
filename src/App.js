import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-tiny-toast';
import publicRoutes from './routes/public';
import { normal } from './themes';
import NotFoundPage from './pages/error/NotFoundPage';
import { Layout, Navbar } from './components/organisms';
import withLocationDetails from './hocs/withLocationDetails';
import withSuspenseLoader from './hocs/withSuspenseLoader';

const App = () => {
  const [theme, updateTheme] = useState(normal);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Layout changeTheme={updateTheme}>
        <Switch>
          {publicRoutes}
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default withSuspenseLoader(withLocationDetails(App));
