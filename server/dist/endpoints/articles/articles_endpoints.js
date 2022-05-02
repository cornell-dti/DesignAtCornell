"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var node_fetch_1 = __importDefault(require("node-fetch"));
function formatArticles(jsonArticles) {
    var ArticlesResponse = jsonArticles;
    return ArticlesResponse;
}
function getArticles(req, res) {
    node_fetch_1["default"]('https://news.cornell.edu/taxonomy/term/14242/json')
        .then(function (response) { return response.json(); })
        .then(function (jsonResponse) { return formatArticles(jsonResponse); })
        .then(function (formattedArticles) { return res.send(formattedArticles); });
}
exports["default"] = getArticles;
