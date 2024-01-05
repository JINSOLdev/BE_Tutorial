// 함수 1 : 휴대폰 번호 자릿수 점검
function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log('핸드폰 번호를 제대로 입력해주세요!');
        return false;
    } else {
        return true;
    }
}

// 함수 2: 토큰 발급
function getToken() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(token);
    return token;
}

// 함수 3: 휴대폰에 토큰 발송
function sendTokenToSMS(myphone, myToken) {
    console.log(myphone + '번호로 인증번호' + ' ' + myToken + '을 전송합니다!');
}

// 퍼사드패턴의 좋은 예
function createTokenOfPhone(myphone) {
    // 1. 휴대폰번호 자릿수 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 휴대폰번호 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 휴대폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);
}

createTokenOfPhone('01012345678'); 