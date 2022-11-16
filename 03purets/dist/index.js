"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        // public email: string;
        // private name: string;
        // readonly city: string = "anywhere";
        this.city = ""; // private를 설정하면 생성자에서만 접근 가능하다.
        // this.email = email;
        // this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
        // 클래스에서만 접근 가능한 메서드이다.
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // protected의 경우에는 상속한 클래스에서 접근할 수 있다.
    }
}
const taejun = new User('test@gmail.com', 'taejun');
// taejun.city = 'anywhere';
