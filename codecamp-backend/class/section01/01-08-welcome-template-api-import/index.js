import { checkEmail, getWelcomeTemplate, sendTokenToEmail } from './email.js';
import { getToday } from './utils.js';

function createUser() {
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-'@'포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school, createdAt });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTokenToEmail(email, myTemplate);
}

const name = '훈발놈';
const age = 18;
const school = '떡잎마을고등학교';
const email = 'abc@abc.com';
const createdAt = getToday();
createUser({ name, age, school, email, createdAt });
