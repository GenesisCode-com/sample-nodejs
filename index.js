const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const http = require('http');

// const server = http.createServer((req, res) => {
//   // Xử lý yêu cầu từ trình duyệt
//   if (req.url === '/trk') {
//     // Chuyển hướng người dùng sang trang web của Google
//     res.writeHead(302, { 'Location': 'https://www.google.com' });
//     res.end();
//   } else {
//     // Trả về trang không tìm thấy nếu đường dẫn không phù hợp
//     res.writeHead(404);
//     res.end();
//   }
// });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/trk') {
    // Chuyển hướng người dùng sang trang web của Google
    res.writeHead(302, { 'Location': 'https://www.google.com' });
    res.end();
  } else {
    // Trả về trang không tìm thấy nếu đường dẫn không phù hợp
    res.writeHead(404);
    res.end();
  }
}).listen(port);