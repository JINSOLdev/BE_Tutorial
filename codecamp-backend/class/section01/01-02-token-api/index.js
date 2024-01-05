// API 만들기 (phoneNum : 매개변수, parameter)
function createTokenOfPhone(phoneNum) {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기 (10~11자리)
    // 휴대폰 번호의 길이가 10보다 작거나 11보다 크다면
    if (phoneNum.length < 10 || phoneNum.length > 11) {
        console.log('핸드폰 번호를 제대로 입력해주세요!'); // => early-exit
        return; // 함수 종료
    }

    // 2. 휴대폰 토큰 6자리 만들기
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(token);

    // 3. 휴대폰번호에 토큰 전송하기
    console.log(phoneNum + '번호로 인증번호' + ' ' + token + '을 전송합니다!');
}

// API 실행하기(01012345678 : 인자, argument) => (브라우저에서 실행한다고 생각하면 됨!)
createTokenOfPhone('01012345678');
