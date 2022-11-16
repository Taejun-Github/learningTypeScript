function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

} 

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue: number = addTwo(5);
let myString: string = getUpper('no');
signUpUser('name', 'email', true);
loginUser('name2', 'email2');

function getValue(myVal: number): any {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return s;
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero: string): string => {
    return `hero is ${hero}`;
})

function consoleError(errormsg: string): void {
    console.log(errormsg);
}

function handleError(errormsg: string): never {
    throw new Error(errormsg);
}

export {}