import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../design-at-cornell/build/')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../design-at-cornell/build/', 'index.html'));
});

app.listen(port, () => {
  console.log(`Design@Cornell server listening on port ${port}`);
});
