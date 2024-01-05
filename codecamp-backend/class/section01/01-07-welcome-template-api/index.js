function createUser() {
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-"@"포함여부)
    const userMail = email;
    if (!userMail.includes('@')) {
        console.log('이메일을 올바르게 입력해주세요!');
    } else {
        console.log('이메일이 확인되었습니다.');
    }

    // 2. 가입환영 템플릿 만들기
    const welcomeTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 축하합니다😀</h1>
                </hr>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>이메일: ${email}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;

    // 3. 이메일에 가입환영 템플릿 전송하기
    console.log(`${name}님에게 ${email}로 ${welcomeTemplate}을 전송합니다!`);
}

const name = '훈발놈';
const age = 18;
const school = '떡잎마을고등학교';
const email = 'abc@abc.com';
const createdAt = '2024-01-05';
createUser({ name, age, school, email, createdAt });
