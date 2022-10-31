import React from 'react';
import {
  ArticleBubbleTitle,
  ArticleBubbleContainer,
  ArticleBubbleSubtitle,
} from '../external-elements-styles';
import { Article } from '../../../../server/src/types';
import { VerticalFlex } from '../../components/ContainerStyles';

const ArticlePictureBubble = (article: Article) => (
  <ArticleBubbleContainer onClick={() => window.open(article.url)}>
    <img src={article.image} alt={article.content_text}></img>
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

export default ArticlePictureBubble;
