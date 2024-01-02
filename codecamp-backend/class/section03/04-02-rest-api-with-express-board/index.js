// 게시글 조회하는 API

import express from 'express';

const app = express();

// GET요청이 들어왔을 때
app.get('/boards', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});
