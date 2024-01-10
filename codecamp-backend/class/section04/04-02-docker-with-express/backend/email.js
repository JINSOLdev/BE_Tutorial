import { getToday } from './utils.js';
import nodemailer from 'nodemailer';

export function checkEmail(email) {
    if (email === undefined || email.includes('@') === false) {
        console.log('에러 발생! 이메일 주소를 확인해주세요!');
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, age, school }) {
    const myTemplate = `
                    <html>
                      <body>
                      <div style="display: flex; flex-direction: column; align-items: center;">
                            <div style="width: 500px;">
                                <h1>${name}님 가입을 환영합니다!!!</h1>
                                <hr />
                                <div style="color: red;">이름: ${name}</div>
                                <div>나이: ${age}</div>
                                <div>학교: ${school}</div>
                                <div>가입일: ${getToday()}</div>
                            </div>
                      </div>
                      </body>
                    </html>

`;
    // console.log(myTemplate);
    return myTemplate;
}

export async function sendTemplateToEmail(email, myTemplate) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jinsol032360@gmail.com',
            pass: 'spluudpjcxlkqegf',
        },
    });

    const res = await transporter.sendMail({
        from: 'jinsol032360@gmail.com',
        to: email,
        subject: '[김진솔] 가입을 축하합니다.',
        html: myTemplate,
    });
    console.log(res);
}
