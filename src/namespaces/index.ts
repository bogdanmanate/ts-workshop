namespace Security {
    export function printUser(user: User) {
        console.log(user.email)
    }

    export class User {
        constructor(public email: string, protected password: string) { }
    }
}