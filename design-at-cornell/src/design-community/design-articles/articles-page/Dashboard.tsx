import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../../components/ContainerStyles';
import { Grid } from '../../../components/DashboardGridStyles';
import { HeadingLine } from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/src/types';
import ArticleBubble from './Bubble';
import LargeArticleBubble from './LargeBubble';
const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <Grid>
      {Object.values(article)
        .slice(0, 1)
        .map((article) => (
          <LargeArticleBubble key={article.id} {...article} />
        ))}
      {Object.values(article)
        .slice(1)
        .map((article) => (
          <ArticleBubble key={article.id} {...article} />
        ))}
    </Grid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine>
          <hr />
          <h3>Articles</h3>
          <line />
        </HeadingLine>
      </HorizontalFlex>
      <br></br>
      <br></br>
      {articleBubbles}
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;
