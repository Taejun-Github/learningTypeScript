class User {

    // private _courseCount = 1;
    protected _courseCount = 1;

    // public email: string;
    // private name: string;
    // readonly city: string = "anywhere";
    private readonly city: string = ""; // private를 설정하면 생성자에서만 접근 가능하다.
    constructor(public email: string, public name: string) {
        // this.email = email;
        // this.name = name;
    }

    private deleteToken() {
        console.log("Token deleted");
        // 클래스에서만 접근 가능한 메서드이다.
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum: number) { // 리턴 타입을 써주면 안된다! void를 써도 안됨
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        } 
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4; // protected의 경우에는 상속한 클래스에서 접근할 수 있다.
    }
}

const taejun = new User('test@gmail.com', 'taejun');
// taejun.city = 'anywhere';

