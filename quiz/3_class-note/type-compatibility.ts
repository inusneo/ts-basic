// 특정 타입이 다른 타입에 잘 맞는지(서로 호환이 잘 되는지)를 의미함
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing

// 인터페이스 호환
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let develop: Developer;
let person: Person;
// develop = person;
person = develop;

// 함수 호환
let add = function(a: number) {

}
let sum = function(a: number, b: number) {

}
sum = add; // sum 함수가 구조적으로 더 크기 때문에 호환 됨
// add = sum;

// 제네릭
interface Empty<T> {
  //..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;