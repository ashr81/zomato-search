/**
 * Provides `Suspense` Wrapper for our components which are loaded laziely.
 * And provided code-split in combination with `React.lazy`
 */
import React, { Suspense } from 'react';

const withSuspenseLoader = (RouteComponent, CustomLoader) => (props) => (
  <Suspense fallback={CustomLoader ? <CustomLoader /> : <div>loading..,</div>}>
    <RouteComponent {...props} />
  </Suspense>
);

export default withSuspenseLoader;
