import express from 'express';

import { checkPhone, getToken, sendTokenToSMS } from './phone.js';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';


const app = express();
app.use(express.json()); // 옛날에는 bodyParser 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get('/boards', (req, res) => {
    // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
        { number: 1, writer: '철수', title: '제목입니다~', content: '내용이에요' },
        { number: 2, writer: '영희', title: '영희입니다~', content: '영희이에요' },
        { number: 3, writer: '훈이', title: '훈이입니다~', content: '훈이이에요' },
    ];

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response)주기
    res.send(result);
});

app.post('/boards', (req, res) => {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log('============');
    console.log(req.body);

    // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

    // 3. DB에 저장된 결과를 브라우저에 응답(response)주기
    res.send('게시물 등록에 성공했습니다.');
});

app.post('/tokens/phone', (req, res) => {
    // console.log(req.body.myphone)
    const myphone = req.body.qqq;

    // 1. 휴대폰번호 자릿수 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 휴대폰번호 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 휴대폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);

    res.send('인증완료!!!');
});

// 3000번 포트에서 실행
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});
