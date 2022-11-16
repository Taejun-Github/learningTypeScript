// const User = {
//     name: "taejun",
//     email: "mcmoohyun@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// let newUser = {name: "test", isPaid: false, email: "test@gmail.com"};

// createUser(newUser); // newUser에는 email이라는 프로퍼티가 있으므로 함수가 받는 객체와 다르다. 따라서 이것은 문제이다.

// function createCourse():{name: string, price: number}{
//     return {name: 'test', price: 10};
// }

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails? : number, // ?를 붙이면 옵션이다.
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let cardExample: cardDetails = {
    cardnumber: '1222-1334',
    cardDate: '11-15-2022',
    cvv: 123
}
// 이런식으로 타입과 타입을 결합해서 새로운 타입을 만들 수 있다.

const myUser: User = {
    _id: '1234',
    name: 'taejun',
    email: 'test@gmail.com',
    isActive: false,
    // credcardDetails: 1234,
};

myUser.email = "new@gmail.com";
// myUser._id = '2';

function readUser(user: User): User {
    return user;
}

readUser(myUser);




export {}