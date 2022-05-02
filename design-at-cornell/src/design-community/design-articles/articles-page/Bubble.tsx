import React from 'react';
import {
  SmallArticleBubbleContainer,
  SmallArticleBubbleTitle,
  SmallArticleBubbleDate,
  SmallArticleBubbleSubtitle,
} from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/types';
import { VerticalFlex } from '../../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <SmallArticleBubbleContainer onClick={() => window.open(article.url)}>
    <VerticalFlex>
      <img src={article.image_featured} alt={article.image_alt} />
      <SmallArticleBubbleDate>
        <p>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}
        </p>
      </SmallArticleBubbleDate>
      <SmallArticleBubbleTitle>
        <p>{article.title}</p>
      </SmallArticleBubbleTitle>
      <SmallArticleBubbleSubtitle>
        <p>{article.content_text}</p>
      </SmallArticleBubbleSubtitle>
    </VerticalFlex>
  </SmallArticleBubbleContainer>
);

export default ArticleBubble;
