// 기본 타입 추론
let txt = 'abc';

function getB(b = 9) {
  let greet = 'hello';
  return b + greet;
}

// 복잡한 타입 추론, 제네릭 사용
/*
interface Dropdown<T> {
  value: T;
  title: string;
}
let shoppingItem: Dropdown<string> = {
  value: 'apple',
  title: 'apple'
}
*/
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
  // value,
  // title,
}

let detailedItem: DetailedDropdown<number> = {
  title: "kyj",
  description: 'test',
  value: 'value',
  tag: 'tag'
}

// Best Common Type 유니온으로 묶어 나간다.
let arr = [1, 2, true, 'name'];