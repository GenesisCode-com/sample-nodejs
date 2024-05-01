const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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
  res.send('bearkd fast')

})

app.get('/trk1', (req, res) => {
  
  res.redirect(301, 'https://searchads2024.gotrackier.com/t/Ml8xMg/');
  
});
app.get('/trk', (req, res) => {
  // Lấy URL từ yêu cầu
  const reqUrl = req.url;
  const index = reqUrl.indexOf('&url=');
  const urlParam = reqUrl.substring(index + 5);
  
  res.redirect(301, urlParam);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
