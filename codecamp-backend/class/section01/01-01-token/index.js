function getToken() {
    // 6자리 토큰 만들기
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(result);
}

getToken();
