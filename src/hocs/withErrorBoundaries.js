
/**
 * Helps in showing error screen on rendering failed because of an
 * error in your render method.
 */
import React from 'react';
import SomethingWentWrongPage from '../pages/error/SomethingWentWrongPage';


class ErrorBoundary extends React.Component {
  state = {
    isError: false,
    info: null,
  }

  componentDidCatch(_error, errorInfo) {
    this.setState({
      isError: true,
      info: errorInfo,
    });
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    if (isError) {
      return (<SomethingWentWrongPage />);
    }
    return children;
  }
}


const withErrorBoundary = (
  Component,
) => (props) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

export default withErrorBoundary;
