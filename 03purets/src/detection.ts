function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null): string | void {
    if (!id) {
        console.log("please provide Id");
        return;
    }
    return id.toLowerCase();
}

interface User {
    name: string,
    email: string,
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean,
}

function isAdminAccount(account: User | Admin): boolean {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
} 

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void;
}

type Bird = {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; // 이전에 정해주지 않고 일단 Fish라고 단정해본다. type predicate
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food";
    }
}

interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    side: number,
}

interface Rectangle {
    kind: "rectagle",
    length: number,
    width: number,
}

type Shape = Circle | Square | Rectangle

// function getTrueShape(shape: Shape) {
//     if(shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     }
//     return shape.side * shape.side;
// }

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectagle":
            return shape.length * shape.width;
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}


export {}