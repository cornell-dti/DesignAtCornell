import React, { lazy, Suspense } from 'react';

const LazyAreasOfStudy = lazy(() => import('./AreasOfStudy'));

const AreasOfStudy = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyAreasOfStudy {...props} />
  </Suspense>
);

export default AreasOfStudy;
