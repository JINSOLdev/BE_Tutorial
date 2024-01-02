// user 매개변수를 받아와서 구조분해할당을 진행한 코드
// function destructuring(user) {
//     const { name, age, school, createdAt } = user;
// }

// const myUser = {
//     name: '철수',
//     age: 13,
//     school: '다람쥐초등학교',
//     createdAt: '2024-01-02',
// };

// destructuring(myUser);

// 구조분해할당으로 변경
function getWelcomeTemplate({ name, age, school, createdAt }) {
    return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다.</h1>
        <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `;
}

const myUser = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    createdAt: '2024-01-02',
};

const result = getWelcomeTemplate(myUser);
console.log(result);
