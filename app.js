const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
 });