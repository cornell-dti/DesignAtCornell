import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DesignArticlesDashboard from './Dashboard';
import { Article } from '../../../../server/types';

const Articles = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getArticles')
      .then((res) => res.data.data)
      .then(setArticles);
  }, []);

  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <DesignArticlesDashboard {...articles}/>
  )
};

export default Articles;