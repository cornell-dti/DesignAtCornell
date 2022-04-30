import React from 'react';
import {
  ArticleBubbleContainer,
  Title,
  ArticleBubbleSubtitle,
} from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <ArticleBubbleContainer onClick={() => window.open(article.url)}>
    <VerticalFlex>
      <img src={article.image_featured} alt={article.image_alt} />
      <Title>
        <p>{article.title}</p>
      </Title>
      <ArticleBubbleSubtitle>
        <p>{article.content_text}</p>
      </ArticleBubbleSubtitle>
    </VerticalFlex>
  </ArticleBubbleContainer>
);

export default ArticleBubble;
