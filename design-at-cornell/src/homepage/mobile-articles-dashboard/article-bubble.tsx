import React from 'react';
import { ArticleBubbleTitle, ArticleBubbleContainer } from './article-homepage-styles'
import { Article } from '../../../../server/src/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <ArticleBubbleContainer onClick={() => window.open(article.url)}>
    <VerticalFlex>
      <ArticleBubbleTitle>
        <p>{article.title}</p>
      </ArticleBubbleTitle>
    </VerticalFlex>
  </ArticleBubbleContainer>
);

export default ArticleBubble;