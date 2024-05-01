// const express = require('express')
// const app = express()
const port = process.env.PORT || 3000

// var LoremIpsum = require('lorem-ipsum').LoremIpsum;

// var lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/trk', (req, res) => {
//     // Chuyển hướng sang trang web của Google
//     res.redirect(301, 'https://www.google.com');
// });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const http = require('http');

const server = http.createServer((req, res) => {
  // Xử lý yêu cầu từ trình duyệt
  if (req.url === '/trk') {
    // Chuyển hướng người dùng sang trang web của Google
    res.writeHead(302, { 'Location': 'https://www.google.com' });
    res.end();
  } else {
    // Trả về trang không tìm thấy nếu đường dẫn không phù hợp
    res.writeHead(404);
    res.end();
  }
});

// Khởi động server trên cổng 8080
server.listen(port, () => {
  console.log('Server is running on port 8080');
});

