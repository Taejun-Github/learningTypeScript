// const user: (string | number | boolean)[] = ['hc', 1, true];
let tUser: [string, number, boolean];

tUser = ["hc", 131, true];
// tUser = [true, 131, 'hc']; 이 경우는 안된다 tuple의 경우에는 반드시 순서를 지켜줘야 한다.
let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [1, "1"];

newUser[1] = "hc.com";
// newUser[0] = '1'; number로 강제되어 있으므로 이렇게 변경하는 것은 안된다.

export {}