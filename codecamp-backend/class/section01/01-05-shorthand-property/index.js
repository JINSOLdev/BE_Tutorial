function aaa(qqq) {
    console.log(qqq);
    console.log(qqq.name);
    console.log(qqq.age);
    console.log(qqq.school);
}

const name = '철수';
const age = 12;
const school = '다람쥐초등학교';
// const profile = {
//   name: name,
//   age: age,
//   school: school
// }

const profile = { name, age, school }; // 키와 밸류가 같아서, 밸류를 생략함 ==> shorthand-property

aaa(profile); // 1. 변수에 담아서 보내주기
aaa({ name, age, school }); // 2. 그냥 통쨰로 보내주기
                            // => 결과는 1번과 2번이 동일함
