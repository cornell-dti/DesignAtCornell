import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { ListsArticles } from '../../components/HomepageStyles';
import { Article } from '../../../../server/src/types';
import OriginalArticleBubble from '../../design-community/design-articles/ArticleBubble';
import ArticleBubble from './article-bubble'

const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <ListsArticles>
      {Object.values(article)
        .slice(0, 2)
        .map((article) => (
          <ArticleBubble key={article.id} {...article} />
        ))}
    </ListsArticles>
  );

  return (
    <VerticalFlex>
      {articleBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
