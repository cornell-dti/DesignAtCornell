import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { ArticleGrid } from '../../components/DashboardGridStyles';
import { HeadingLine } from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/types';
import ArticleBubble from './ArticleBubble';

const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <ArticleGrid>
      {Object.values(article)
        .slice(0, 3)
        .map((article) => (
          <ArticleBubble key={article.id} {...article} />
        ))}
    </ArticleGrid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine>
          <hr />
          <h1 onClick={() => window.open('/articles', '_self')}>Design Articles</h1>
          <line />
          <h2 onClick={() => window.open('/articles', '_self')}>View more articles</h2>
          <hr />
        </HeadingLine>
      </HorizontalFlex>
      <br></br>
      {articleBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
