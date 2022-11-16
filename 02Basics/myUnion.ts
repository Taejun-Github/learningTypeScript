let score: number | string = 33;

score = 'test';
score = 11;

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let taejun: User | Admin = {
    name: 'taejun',
    id: 1234,
}

taejun = {username: 'changed', id: 1234};

function getDbId(id: number | string): number | string {
    if (typeof id === "string") {
        id.toLowerCase();
    } else if (typeof id === "number") {
        id + 3;
    }
    return id;
}

// array

const data: (number | string)[] = [1, 2, 3, "4"]; // 문자와 숫자를 섞어 쓰기 위한 것
const data2: number[] | string[] = [1, 2, 3]; // 이것은 모두 숫자인 배열이거나 모두 문자인 배열. 숫자와 문자를 섞어 쓰는 것은 허용되지 않음.
const data3: Array<number | string> = [1, 2, 3, "4"];

let pi:3.14 = 3.14; // 상수는 이렇게 표시한다.
// pi = 3;
let seatAllotment: "aisle" | "middle" | "window";
// 세가지 값 중에서 하나만 선택 가능하다.
seatAllotment = "aisle";


export {}