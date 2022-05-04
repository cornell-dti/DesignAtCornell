import React from 'react';
import {
  ArticleBubbleContainer,
  ArticleBubbleTitle,
  ArticleBubbleSubtitle,
} from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/src/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <ArticleBubbleContainer onClick={() => window.open(article.url)}>
    <VerticalFlex>
      <img src={article.image_featured} alt={article.image_alt} />
      <ArticleBubbleTitle>
        <p>{article.title}</p>
      </ArticleBubbleTitle>
      <ArticleBubbleSubtitle>
        <p>{article.content_text}</p>
      </ArticleBubbleSubtitle>
    </VerticalFlex>
  </ArticleBubbleContainer>
);

export default ArticleBubble;
