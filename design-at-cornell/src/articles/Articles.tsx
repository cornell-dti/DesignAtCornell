import React, { useEffect, useState } from 'react';
import api from '../constants/util';

// assets
import articlesBg from './articles-bg.svg';

// styles
import { Banner, BannerText, Header, SubHeader } from './Articles.styles';

type Article = {
  id: string;
  url: string;
  title: string;
  content_text: string;
  image: string;
  image_1x1: string;
  date_published: string;
  tags: string[];
  image_featured: string;
  image_alt: string;
};

const Articles = () => {
  // articles to show
  const [articles, setArticles] = useState<Article[]>([]);

  // get articles from database
  useEffect(() => {
    api.get('/getArticles').then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <div>
      <Banner>
        <BannerText>
          <Header> Design Articles </Header>
          <SubHeader> Get inspired by real life stories</SubHeader>
          From almuni to current students to professionals in industry.
        </BannerText>
        <img src={articlesBg} alt="articles" />
      </Banner>
      {articles.map((article) => (
        <div>{article.title}</div>
      ))}
    </div>
  );
};

export default Articles;
