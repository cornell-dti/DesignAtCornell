import React from 'react';
import { ElementContainer, Title, Subtitle } from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/types';
import { VerticalFlex } from '../../../components/ContainerStyles';

const ArticleBubble = (article: Article) => (
  <ElementContainer
    style={{ width: `270px`, height: `325px`, borderRadius: `20px` }}
    onClick={() => window.open(article.url)}
  >
    <VerticalFlex>
      <img
        style={{ width: `270px`, height: `180px` }}
        src={article.image_featured}
        alt={article.image_alt}
      />
      <Subtitle>
        <p style={{ marginTop: `40px`, fontSize: `11px`, lineHeight: `13px` }}>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}
        </p>
      </Subtitle>
      <Title>
        <p style={{ marginTop: `5px`, width: `220px`, WebkitLineClamp: 3 }}>{article.title}</p>
      </Title>
      <Subtitle>
        <p
          style={{
            marginTop: `5px`,
            marginBottom: `-5px`,
            fontSize: `12px`,
            lineHeight: `18px`,
            WebkitLineClamp: 3,
          }}
        >
          {article.content_text}
        </p>
      </Subtitle>
    </VerticalFlex>
  </ElementContainer>
);

export default ArticleBubble;
