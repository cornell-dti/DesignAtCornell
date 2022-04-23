import React, { lazy, Suspense } from 'react';

const LazyDesignCommunity = lazy(() => import('./DesignCommunity'));

const DesignCommunity = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyDesignCommunity {...props} />
  </Suspense>
);

export default DesignCommunity;