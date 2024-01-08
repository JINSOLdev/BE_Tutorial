// 함수 1 : 휴대폰 번호 자릿수 점검
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
export function sendTokenToSMS(myphone, myToken) {
    console.log(myphone + '번호로 인증번호' + ' ' + myToken + '을 전송합니다!');
}
