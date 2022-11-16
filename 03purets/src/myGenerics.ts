const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
    // number가 들어가고 string이 반환되어도 상관없다. 아무거나 들어가고 아무거나 반환되어도 상관없음
}

function identityThree<Type>(val: Type): Type {
    return val;
    // any와의 차이는? 만약 파라미터에 number가 대입되면 리턴값은 무조건 number가 되어야 한다.
    // 반드시 파라미터와 리턴 타입이 같아야 한다.
}

function identityFour<T>(val: T): T {
    return val;
    // identityThree와 같다.
}

interface Bottle {
    brand: string,
    type: number,
}

identityFour<Bottle>({brand: 'test', type: 1});

function getSearchProducts<T>(products: Array<T>): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProduct = <T,>(products: Array<T>): T => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
    // 제네릭 표현으로 화살표 함수를 만들 때는 이렇게 한다.
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    }
} 

// anotherFunction(3, {});

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}

export {}