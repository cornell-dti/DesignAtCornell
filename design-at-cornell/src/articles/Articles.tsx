import React, { useEffect, useState } from 'react';
import api from '../constants/util';

// global context
import { mobileBreakpoint } from '../constants/styling';

// pagination
import Pagination from '../pagination/Pagination';

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
  XSContent,
  XSTitle,
  LeftContainer,
  Row,
  RegContainer,
  RegBubble,
  RegContent,
  RegDate,
  RegTitle,
  RegText,
  MLBubble,
  MLContent,
  MLDate,
  MLTitle,
  MLText,
  MobileContainer,
  MobileBubble,
  MobileContent,
  MobileDate,
  MobileTitle,
  FirstRow,
  WideDivider,
  SmallDivider,
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
    <BigBubble onClick={() => window.open(article.url)}>
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
    <MBubble onClick={() => window.open(article.url)}>
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
    <XSBubble onClick={() => window.open(article.url)}>
      <img src={article.image} alt={article.image_alt} />
      <XSContent>
        <XSTitle> {article.title} </XSTitle>
      </XSContent>
    </XSBubble>
  );
};

const RegArticle = (article: Article) => {
  return (
    <RegBubble onClick={() => window.open(article.url)}>
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

const MLArticle = (article: Article) => {
  return (
    <MLBubble onClick={() => window.open(article.url)}>
      <img src={article.image_featured} alt={article.image_alt} />
      <MLContent>
        <MLDate>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}{' '}
        </MLDate>
        <MLTitle>{article.title} </MLTitle>
        <MLText>{article.content_text}</MLText>
      </MLContent>
    </MLBubble>
  );
};

const MobileArticle = (article: Article) => {
  return (
    <MobileBubble onClick={() => window.open(article.url)}>
      <MobileContent>
        <MobileTitle>{article.title} </MobileTitle>
        <MobileDate>
          {article.date_published.split(' ')[2] +
            ' ' +
            article.date_published.split(' ')[1] +
            ', ' +
            article.date_published.split(' ')[3]}{' '}
        </MobileDate>
      </MobileContent>
      <img src={article.image_1x1} alt={article.image_alt} />
    </MobileBubble>
  );
};

const Articles = () => {
  // articles to show
  const [articles, setArticles] = useState<Article[]>([]);
  const [currPage, setCurrPage] = useState(1);

  // get articles from database
  useEffect(() => {
    api.get('/getArticles').then((res) => {
      setArticles(res.data);
    });
  }, []);

  const mobileViewCheck = `(max-width: ${mobileBreakpoint}px)`;
  const [mobileView, setMobileView] = useState(window.matchMedia(mobileViewCheck).matches);
  useEffect(() => {
    window.matchMedia(mobileViewCheck).addEventListener('change', (e) => setMobileView(e.matches));
  }, [mobileViewCheck]);

  // articles to show
  const articlesPerPage = 8;
  const lastArticleIdx = currPage * articlesPerPage;
  const firstArticleIdx = lastArticleIdx - articlesPerPage;
  var currentArticles = articles.slice(firstArticleIdx, lastArticleIdx + 4);
  if (mobileView) {
    currentArticles = articles.slice(firstArticleIdx, lastArticleIdx + 1);
  }

  const DesktopView = () => {
    return (
      <Body>
        <FirstRow>
          {articles[0] && <BigArticle {...articles[0]} />}

          <LeftContainer>
            {articles[1] && <MedArticle {...articles[1]} />}
            <SmallDivider />
            <Row>
              {articles[2] && <XSArticle {...articles[2]} />}
              {articles[3] && <XSArticle {...articles[3]} />}
            </Row>
          </LeftContainer>
        </FirstRow>
        <WideDivider />
        <RegContainer>
          {currentArticles.map((article, index) => {
            // map through all articles
            if (index > 3) {
              return <RegArticle {...article} />;
            }
            return null;
          })}
        </RegContainer>
      </Body>
    );
  };

  const MobileView = () => {
    return (
      <MobileContainer>
        {articles[0] && <MLArticle {...articles[0]} />}
        {currentArticles.map((article, index) => {
          // map through all articles
          if (index > 0) {
            return <MobileArticle {...article} />;
          }
          return null;
        })}
      </MobileContainer>
    );
  };

  return (
    <div>
      <Banner>
        <BannerText>
          <Header> Design Articles </Header>
          <SubHeader> Get inspired by real life stories</SubHeader>
          From almuni to current students to professionals in industry.
        </BannerText>
      </Banner>
      {mobileView ? <MobileView /> : <DesktopView />}
      <Pagination
        currentPage={currPage}
        cardsPerPage={articlesPerPage}
        totalCards={articles.length - 4}
        paginate={setCurrPage}
      />
    </div>
  );
};

export default Articles;
