import React, { lazy, Suspense } from 'react';

const LazySideNav = lazy(() => import('./SideNav'));

const SideNav = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySideNav {...props} />
  </Suspense>
);

export default SideNav;
