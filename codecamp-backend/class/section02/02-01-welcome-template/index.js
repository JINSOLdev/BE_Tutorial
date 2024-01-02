function getWelcomeTemplate(myName, myAge, mySchool, myCreatedAt) {
    return `
  <html>
      <body>
          <h1>${myName}님 가입을 환영합니다.</h1>
          <hr />
          <div>이름: ${myName}</div>
          <div>나이: ${myAge}살</div>
          <div>학교: ${mySchool}</div>
          <div>가입일: ${myCreatedAt}</div>
      </body>
  </html>
`;
}

const myName = '철수';
const myAge = 13;
const mySchool = '다람쥐초등학교';
const myCreatedAt = '2010-09-07';

const result = getWelcomeTemplate(myName, myAge, mySchool, myCreatedAt);
console.log(result);
