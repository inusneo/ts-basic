interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  //..
}

// 상세 정보의 경우 속성이 다를 수 있다.. 일부 속성만 필요 or 별도의 기능이 추가 될 수 있다.
// 그래서 정의해 놓은 타입 중 원하는 속성만 가져올 수 있다.
function displayProductDetail(prdoductItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// 특정 상품의 정보를 업데이트(갱신) 하는 함수
// Product의 속성들을 전부 옵셔널 처리할 수 있다.
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {

}

// Partial Example
interface UserInfo {
  username: string;
  email: string;
  profileUrl: string;
}

// type UserInfoUpdate = {
//   [p in 'username' | 'email' | 'profileUrl']?: UserInfo[p];
// }
type UserInfoKeys = keyof UserInfo;

type UserInfoUpdate = {
  [p in keyof UserInfo]?: UserInfo[p];
}

// 최종
type Subset<T> = {
  [p in keyof T]?: T[p];
}