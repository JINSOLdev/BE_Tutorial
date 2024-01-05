function getWelcomeTemplate({ name, age, school, createAt }) {
    const myTemplate = `
                        <html>
                          <body>
                              <h1>${name}님 가입을 환영합니다!!!</h1>
                              <hr />
                              <div>이름: ${name}</div>
                              <div>나이: ${age}</div>
                              <div>학교: ${school}</div>
                              <div>가입일: ${createAt}</div>
                          </body>
                        </html>
  
  `;
    console.log(myTemplate);
}

const name = 'amy';
const age = 21;
const school = 'Harvard University';
const createAt = '2023-12-28';

// 중괄호를 사용하여 인자를 나열하는 방법
getWelcomeTemplate({ name, age, school, createAt });
