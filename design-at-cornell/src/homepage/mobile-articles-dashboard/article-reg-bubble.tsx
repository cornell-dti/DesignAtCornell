import React from 'react';
import {
  ArticleBubbleTitle,
  ArticleBubbleContainer,
  ArticleBubbleSubtitle,
} from './article-homepage-styles';
import { Article } from '../../../../server/src/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <ArticleBubbleContainer onClick={() => window.open(article.url)}>
    <VerticalFlex>
      <ArticleBubbleSubtitle>
        <p>
          {new Date(article.date_published).toLocaleString('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </ArticleBubbleSubtitle>
      <ArticleBubbleTitle>
        <p>{article.title}</p>
      </ArticleBubbleTitle>
    </VerticalFlex>
  </ArticleBubbleContainer>
);

export default ArticleBubble;
