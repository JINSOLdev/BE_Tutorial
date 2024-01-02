function getWelcomeTemplate(myUser) {
    return `
<html>
    <body>
        <h1>${myUser.name}님 가입을 환영합니다.</h1>
        <hr />
        <div>이름: ${myUser.name}</div>
        <div>나이: ${myUser.age}살</div>
        <div>학교: ${myUser.school}</div>
        <div>가입일: ${myUser.createdAt}</div>
    </body>
</html>
`;
}

const myUser = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    createdAt: '2010-09-07',
};

const result = getWelcomeTemplate(myUser);
console.log(result);

// 기존 방식
// const name = myUser.name;
// const age = myUser.age;
// const school = myUser.school;
// const createdAt = myUser.createdAt;

// 구조분해할당
const { name, age, school, createdAt } = myUser;


// 예제 2
const classmates = ['철수', '영희', '훈이'];

// const child1 = classmates[0];
// const child2 = classmates[1];
// const child3 = classmates[2];

// 구조분해할당을 이용해
// child1엔 arr[0]
// child2엔 arr[1]
// child3엔 arr[2]을 할당하였습니다.
const [child1, child2, child3] = classmates;
