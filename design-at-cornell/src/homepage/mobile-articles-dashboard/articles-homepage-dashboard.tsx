import React, { useEffect, useState } from 'react';
import api from '../../constants/util';
import DesignArticlesDashboard from './mobile-articles-display';
import { Article } from '../../../../server/src/types';

const ArticlesPage = () => {
  useEffect(() => {
    api
      .get('/getArticles')
      .then((res) => res.data)
      .then(setArticles);
  }, []);

  const [articles, setArticles] = useState<Article[]>([]);

  return <DesignArticlesDashboard {...articles} />;
};

export default ArticlesPage;
