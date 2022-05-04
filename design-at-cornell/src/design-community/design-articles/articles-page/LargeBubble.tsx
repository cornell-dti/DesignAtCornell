import React from 'react';
import {
  LargeArticleBubbleContainer,
  LargeArticleBubbleTitle,
  LargeArticleBubbleDate,
  LargeArticleBubbleSubtitle,
} from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/src/types';
import {
  HorizontalFlex,
  VerticalFlex,
  ArticleBubbleVerticalFlex,
} from '../../../components/ContainerStyles';

const LargeArticleBubble = (article: Article) => (
  <VerticalFlex>
    <LargeArticleBubbleContainer onClick={() => window.open(article.url)}>
      <HorizontalFlex>
        <img src={article.image} alt={article.image_alt} />
        <ArticleBubbleVerticalFlex>
          <LargeArticleBubbleDate>
            <p>
              {article.date_published.split(' ')[2] +
                ' ' +
                article.date_published.split(' ')[1] +
                ', ' +
                article.date_published.split(' ')[3]}
            </p>
          </LargeArticleBubbleDate>
          <LargeArticleBubbleTitle>{article.title}</LargeArticleBubbleTitle>
          <LargeArticleBubbleSubtitle>
            <p>{article.content_text}</p>
          </LargeArticleBubbleSubtitle>
        </ArticleBubbleVerticalFlex>
      </HorizontalFlex>
    </LargeArticleBubbleContainer>
    <br></br>
  </VerticalFlex>
);

export default LargeArticleBubble;
