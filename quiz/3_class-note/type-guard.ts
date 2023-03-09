interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Union 타입은 공통된 속성만 접근할 수 있다.
function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
let tony = introduce();
console.log(tony.skill); // error
console.log(tony.name); 

// Type 단언을 이용한 정의... 가독성 떨어짐
if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
} 

// Type 가드 정의 - is 키워드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
if (isDeveloper(tony)) {
  tony.skill
} else {
  tony.age
}