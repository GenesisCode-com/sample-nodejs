const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware để thiết lập các tiêu đề HTTP
app.use((req, res, next) => {
  // Thiết lập tiêu đề Cache-Control
  res.set('Cache-Control', 'public, max-age=3600'); // Cache trong 1 giờ

  // Thiết lập tiêu đề ETag
  res.set('ETag', '123456'); // Thay '123456' bằng giá trị ETag thích hợp

  // Thiết lập tiêu đề Last-Modified
  res.set('Last-Modified', new Date().toUTCString());

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/trk', (req, res) => {
  // Chuyển hướng người dùng sang trang web của Google
  res.redirect(301, 'https://www.google.com');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
