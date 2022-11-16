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

export {}