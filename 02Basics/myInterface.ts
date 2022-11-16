interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string // string을 반환하는 함수를 작성해주어야 한다.
    startTrail(): string // 이렇게 써줄수도 있다.
    getCoupon(couponname: string, value: number): number, // string, number를 받아서 number를 반환하는 함수
}

// type과 interface의 차이는 struct와 class의 차이와 비슷하다고 보면 될 것 같다.

interface User {
    // 인터페이스는 이렇게 프로퍼티 추가도 가능하다.
    githubToken: string,
}

interface Admin extends User {
    // 인터페이스는 상속도 가능하다. 다중상속도 된다.
    role: "admin" | "ta" | "learner",
}

const taejun: Admin = {
    dbId: 1,
    role: "admin",
    githubToken: 'github',
    email: 'test',
    userId: 123,
    startTrail: () => {
        return 'abc';
    },
    getCoupon: (name: 'taejun10', off: 10) => {
        return 10;
    }
}

taejun.email = 'test@gmail.com';
// taejun.dbId = 123;

export {}