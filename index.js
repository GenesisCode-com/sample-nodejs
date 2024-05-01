const express = require('express')
const app = express()
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/trk', (req, res) => {
  // Lấy URL từ yêu cầu
  const reqUrl = req.url;
  const index = reqUrl.indexOf('&url=');
  const urlParam = reqUrl.substring(index + 5);
  
  res.redirect(301, urlParam);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
