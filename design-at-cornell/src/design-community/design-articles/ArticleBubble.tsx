import React from 'react';
import {
  ElementContainer,
  Title,
  Subtitle
} from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/types';

const ArticleBubble = (article: Article) => (
  <ElementContainer>
    <Title>
      <p>{article.title}</p>
    </Title>
    <Subtitle>
      <p>{article.content_text}</p>
    </Subtitle>
  </ElementContainer>
);

export default ArticleBubble;
