"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
    // number가 들어가고 string이 반환되어도 상관없다. 아무거나 들어가고 아무거나 반환되어도 상관없음
}
function identityThree(val) {
    return val;
    // any와의 차이는? 만약 파라미터에 number가 대입되면 리턴값은 무조건 number가 되어야 한다.
    // 반드시 파라미터와 리턴 타입이 같아야 한다.
}
function identityFour(val) {
    return val;
    // identityThree와 같다.
}
identityFour({ brand: 'test', type: 1 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProduct = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
    // 제네릭 표현으로 화살표 함수를 만들 때는 이렇게 한다.
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
