import coolsms from 'coolsms-node-sdk';
const mysms = coolsms.default;

export function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log('핸드폰 번호를 제대로 입력해주세요!');
        return false;
    } else {
        return true;
    }
}

// 함수 2: 토큰 발급
export function getToken() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(token);
    return token;
}

// 함수 3: 휴대폰에 토큰 발송
export async function sendTokenToSMS(myphone, token) {
    const messageService = new mysms('API-KEY', 'API-SECRETS');
    const res = await messageService.sendOne({
        to: myphone,
        from: 'NUMBER',
        text: `[김진솔] 안녕하세요?! 요청하신 인증번호는[${token}] 입니다.`,
    });
    console.log(res);
}

// 함수 4: env 파일 분리 (인증번호 전송 시도에서 에러 발생)
// export async function sendTokenToSMS(myphone, token) {
//     const SMS_KEY = process.env.SMS_KEY;
//     const SMS_SECRETS = process.env.SMS_SECRETS;
//     const SMS_SENDER = process.env.SMS_SENDER;

//     const mysms = coolsms.default;
//     const messageService = new mysms(SMS_KEY, SMS_SECRETS);
//     const result = await messageService.sendOne({
//         to: myphone,
//         from: SMS_SENDER,
//         text: `[김진솔] 안녕?! 요청하신 인증번호는[${token}] 입니다.`,
//     });
//     console.log(result);
// }
