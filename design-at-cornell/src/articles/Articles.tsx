import React, { useEffect, useState } from 'react';
import api from '../constants/util';

// styles
import {
  Banner,
  BannerText,
  Header,
  SubHeader,
  Body,
  BigBubble,
  BigBubbleContent,
  BH1,
  BubbleText,
  BubbleDate,
  MBubble,
  MContent,
  MTitle,
  MText,
  XSBubble,
  XSTitle,
  LeftContainer,
  Row,
  RegBubble,
  RegContent,
  RegDate,
  RegTitle,
  RegText,
} from './Articles.styles';

type Article = {
  id: string;
  url: string;
  title: string;
  content_text: string;
  image: string;
  image_1x1: string;
  date_published: string;
  tags: string[];
  image_featured: string;
  image_alt: string;
};

const BigArticle = (article: Article) => {
  return (
    <BigBubble>
      <BigBubbleContent>
        <BubbleDate>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}
        </BubbleDate>
        <BH1>{article.title}</BH1>
        <BubbleText>{article.content_text}</BubbleText>
      </BigBubbleContent>
      <img src={article.image} alt={article.image_alt} />
    </BigBubble>
  );
};

const MedArticle = (article: Article) => {
  return (
    <MBubble>
      <img src={article.image_1x1} alt={article.image_alt} />
      <MContent>
        <RegDate>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}
        </RegDate>
        <MTitle>{article.title}</MTitle>
        <MText>{article.content_text}</MText>
      </MContent>
    </MBubble>
  );
};

const XSArticle = (article: Article) => {
  return (
    <XSBubble>
      <img src={article.image_1x1} alt={article.image_alt} />
      <XSTitle> {article.title} </XSTitle>
    </XSBubble>
  );
};

const RegArticle = (article: Article) => {
  return (
    <RegBubble>
      <img src={article.image_featured} alt={article.image_alt} />
      <RegContent>
        <RegDate>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}{' '}
        </RegDate>
        <RegTitle>{article.title} </RegTitle>
        <RegText>{article.content_text}</RegText>
      </RegContent>
    </RegBubble>
  );
};

const Articles = () => {
  // articles to show
  const [articles, setArticles] = useState<Article[]>([]);

  // get articles from database
  useEffect(() => {
    api.get('/getArticles').then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <div>
      <Banner>
        <BannerText>
          <Header> Design Articles </Header>
          <SubHeader> Get inspired by real life stories</SubHeader>
          From almuni to current students to professionals in industry.
        </BannerText>
      </Banner>
      <Body>
        {articles[0] && <BigArticle {...articles[0]} />}
        <LeftContainer>
          {articles[1] && <MedArticle {...articles[1]} />}
          <Row>
            {articles[2] && <XSArticle {...articles[2]} />}
            {articles[3] && <XSArticle {...articles[3]} />}
          </Row>
        </LeftContainer>
        {articles.map((article, index) => {
          // map through all articles
          if (index > 3 && index <= 15) {
            return <RegArticle {...article} />;
          }
        })}
      </Body>
    </div>
  );
};

export default Articles;

// {
//   articles.map((article, i) => {
//     if (i === 0) {
//       return BigArticle(article);
//     } else if (i == 1) {
//       return MedArticle(article);
//     } else if (i === 2 || i === 3) {
//       return XSArticle(article);
//     }
//   });
// }
