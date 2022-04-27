import React from 'react';
import {
  ElementContainer,
  Title,
  Subtitle
} from '../../components/DashboardElementStyles';
import { Article } from '../../../../server/types';
import { VerticalFlex } from '../../components/ContainerStyles';


const ArticleBubble = (article: Article) => (
  <ElementContainer style={{width: `370px`, height: `350px`, borderRadius: `20px`}}>
    <VerticalFlex>
      <img src={article.image_featured} alt={article.image_alt}/>
      <Title>
        <p>{article.title}</p>
      </Title>
      <Subtitle>
        <p style={{marginBottom: `-5px`, fontSize: `12px`, lineHeight: `18px`}}>{article.content_text}</p>
      </Subtitle>
    </VerticalFlex>
  </ElementContainer>
);

export default ArticleBubble;
