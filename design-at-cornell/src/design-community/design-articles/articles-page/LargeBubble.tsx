import React from 'react';
import {
  ElementContainer,
  Title,
  Subtitle
} from '../../../components/DashboardElementStyles';
import { Article } from '../../../../../server/types';
import { HorizontalFlex, VerticalFlex } from '../../../components/ContainerStyles';

const LargeArticleBubble = (article: Article) => (
    <VerticalFlex>
        <ElementContainer style={{marginLeft: `20px`, width: `1240px`, height: `350px`, borderRadius: `20px`}}  onClick={() => (window.open(article.url))}>
            <HorizontalFlex>
            <img style={{width: `550px`, height: `350px`, borderRadius: `20px 0px 0px 20px`}} src={article.image} alt={article.image_alt}/>
            <VerticalFlex style={{marginLeft: `70px`, justifyContent: `space-evenly`}}>
                <Subtitle>
                    <p style={{fontSize: `18px`, lineHeight: `21px`}}>
                        {article.date_published.split(" ")[2] + " " + article.date_published.split(" ")[1] + ", " + article.date_published.split(" ")[3]} 
                        </p>
                </Subtitle>
                <Title style={{width: `600px`, fontSize: `40px`, lineHeight: `47px`}}>
                    {article.title}
                </Title>
                <Subtitle>
                    <p style={{fontSize: `20px`, lineHeight: `30px`, WebkitLineClamp: 4}}>{article.content_text}</p>
                </Subtitle>
            </VerticalFlex>
            </HorizontalFlex>
        </ElementContainer>
        <br></br>
    </VerticalFlex>
);

export default LargeArticleBubble;