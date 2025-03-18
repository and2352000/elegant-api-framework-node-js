
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane' },
]
export class UserRepo {
    constructor() { }

    async createUser(name: string) {
        const newUser = { id: users.length + 1, name }
        users.push(newUser)
        return newUser
    }

    async getUsers() {
        return users;
    }

    async getUserById(id: number) {
        return users.find(user => user.id === id);
    }
}

