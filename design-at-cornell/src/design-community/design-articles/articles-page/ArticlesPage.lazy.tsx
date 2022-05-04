import React, { lazy, Suspense } from 'react';

const LazyArticlesPage = lazy(() => import('./ArticlesPage'));

const ArticlesPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyArticlesPage {...props} />
  </Suspense>
);

export default ArticlesPage;
