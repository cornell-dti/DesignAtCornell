import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../docs/')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/', 'index.html'));
});

app.listen(port, () => {
  console.log("Design@Cornell server listening on port " + port);
});