import React, { lazy, Suspense } from 'react';

const LazyPlaceholderImage = lazy(() => import('./AppPlaceholderImage'));

const AppPlaceholderImage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyPlaceholderImage {...props} />
  </Suspense>
);

export default AppPlaceholderImage;
