import React from 'react';
import { HorizontalFlex, VerticalFlex } from '../../../components/ContainerStyles';
import { Grid } from '../../../components/DashboardGridStyles';
import { HeadingLine, HeadingTitle } from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/types';
import ArticleBubble from './Bubble';
import LargeArticleBubble from './LargeBubble';
const Dashboard = (article: Article[]) => {

  const articleBubbles = (
    <Grid style = {{justifyContent: `space-between`}}>
      {Object.values(article).slice(0,1).map((article) => (
        <LargeArticleBubble key={article.id} {...article} />
      ))}
      {Object.values(article).slice(1).map((article) => (
        <ArticleBubble key={article.id} {...article} />
      ))}
    </Grid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      <HorizontalFlex>
        <HeadingLine style={{width: `75px`}}/>
        <HeadingTitle style={{fontWeight: 700, fontSize: `45px`}}>Articles</HeadingTitle>
        <HeadingLine style={{width: `1150px`}}/>
      </HorizontalFlex>
      <br></br>
      <br></br>
      {articleBubbles}
      <br></br>
    </VerticalFlex>
  );
};

export default Dashboard;