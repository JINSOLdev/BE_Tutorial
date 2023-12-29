const name = 'amy';
const age = 21;
const school = 'Havard University';
const createAt = '2023-12-28';

function getWelcomeTemplate({ name, age, school, createAt }) {
    const mytemplate = `
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
    console.log(mytemplate);
}

getWelcomeTemplate({ name, age, school, createAt });
