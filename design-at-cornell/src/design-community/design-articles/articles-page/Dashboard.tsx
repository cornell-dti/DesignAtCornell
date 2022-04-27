import React from 'react';
import { VerticalFlex } from '../../../components/ContainerStyles';
import { Grid } from '../../../components/DashboardGridStyles';
import { Article } from '../../../../../server/types';
import ArticleBubble from './Bubble';

const Dashboard = (article: Article[]) => {
  const articleBubbles = (
    <Grid style = {{justifyContent: `space-between`}}>
      {Object.values(article).map((article) => (
        <ArticleBubble key={article.id} {...article} />
      ))}
    </Grid>
  );

  return (
    <VerticalFlex>
      <br></br>
      <br></br>
      {articleBubbles}
    </VerticalFlex>
  );
};

export default Dashboard;