//패키지 불러오기
const express = require('express');
// app은 express를 실행하게 해 줌  
const app = express()
// MongoDB와 연결하기
const mongoose = require('mongoose');
const cors = require('cors');
// .env에서 파일 가져오기
require('dotenv/config');
// parsing을 위한 라이브러리 추가
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
// Router import하기
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Router
app.get('/', (req, res) => {
    res.send('home에 있음');
});

// DB랑 연결하기
mongoose.connect(
    process.env.DB_CONNECTION ,
    { useNewUrlParser: true },
    () => console.log ('DB에 연결 됨')
    )

// 서버에서 듣기
app.listen(3000);

