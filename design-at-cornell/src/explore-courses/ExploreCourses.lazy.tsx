import React, { lazy, Suspense } from 'react';

const LazyExploreCourses = lazy(() => import('./ExploreCourses'));

const ExploreCourses = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyExploreCourses {...props} />
  </Suspense>
);

export default ExploreCourses;
