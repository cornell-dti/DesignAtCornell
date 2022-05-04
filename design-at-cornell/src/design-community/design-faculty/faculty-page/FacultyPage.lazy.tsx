import React, { lazy, Suspense } from 'react';

const LazyFacultyPage = lazy(() => import('./FacultyPage'));

const FacultyPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyFacultyPage {...props} />
  </Suspense>
);

export default FacultyPage;
