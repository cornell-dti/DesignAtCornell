import fetch from 'node-fetch';
import { Article } from '../../types';

function formatArticles(jsonArticles) {
  const ArticlesResponse: Article[] = jsonArticles as Article[];
  return ArticlesResponse;
}

export default function getArticles(req, res) {
  fetch('https://news.cornell.edu/taxonomy/term/14242/json')
    .then((response) => response.json())
    .then((jsonResponse) => formatArticles(jsonResponse))
    .then((formattedArticles) => res.send(formattedArticles));
}
