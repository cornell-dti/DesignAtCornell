import React, { lazy, Suspense } from 'react';

const LazyExploreCourses = lazy(() => import('./Clubs'));

const Clubs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyExploreCourses {...props} />
  </Suspense>
);

export default Clubs;
