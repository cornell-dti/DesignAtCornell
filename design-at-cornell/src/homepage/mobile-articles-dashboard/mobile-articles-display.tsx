import React from 'react';
import { VerticalFlex } from '../../components/ContainerStyles';
import { ListsArticles } from '../../components/HomepageStyles';
import { Article } from '../../../../server/src/types';
import ArticlePictureBubble from './article-pic-bubble';
import ArticleBubble from './article-reg-bubble';

const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <ListsArticles>
      {Object.values(article)
        .slice(0, 1)
        .map((article) => (
          <ArticlePictureBubble key={article.id} {...article} />
        ))}
      {Object.values(article)
        .slice(1, 3)
        .map((article) => (
          <ArticleBubble key={article.id} {...article} />
        ))}
    </ListsArticles>
  );

  return <VerticalFlex>{articleBubbles}</VerticalFlex>;
};

export default Dashboard;
