import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../components/ContainerStyles';
import { Grid } from '../../components/DashboardGridStyles';
import { HeadingLine, HeadingTitle } from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/types';
import ArticleBubble from './ArticleBubble';

const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <Grid style={{ justifyContent: `space-between` }}>
      {Object.values(article)
        .slice(0, 3)
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
        <HeadingLine style={{ width: `50px` }} />
        <HeadingTitle style={{ fontSize: `18px` }}>Design Articles</HeadingTitle>
        <HeadingLine style={{ width: `975px` }} />
        <HeadingTitle
          style={{ fontSize: `14px`, cursor: `pointer` }}
          onClick={() => window.open('/articles', '_self')}
        >
          View more articles
        </HeadingTitle>
        <HeadingLine style={{ width: `100px` }} />
      </HorizontalFlex>
      <br></br>
      {articleBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;
