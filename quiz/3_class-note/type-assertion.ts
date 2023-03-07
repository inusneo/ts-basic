// 타입 단언 
// 개발자 자신이 타입에 대해 더 정확하게 알고 있을 때 직접 선언한 타입으로 간주를 해라...
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
// 사용해야 하는 특정 시점에 조작하기 위해...
let divEl = document.querySelector('.wrap') as HTMLDivElement;
divEl.innerText;

// 이와 같이 divEl이 DOM에 존재할 때 조작하도록 하는 것...
// if (divEl) {
//   divEl.innerText;
// }