
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
const node_fetch_1 = __importDefault(require('node-fetch'));

function formatArticles(jsonArticles) {
  const ArticlesResponse = jsonArticles;
  return ArticlesResponse;
}
function getArticles(req, res) {
  node_fetch_1.default('https://news.cornell.edu/taxonomy/term/14242/json')
    .then((response) => response.json())
    .then((jsonResponse) => formatArticles(jsonResponse))
    .then((formattedArticles) => res.send(formattedArticles));
}
exports.default = getArticles;
