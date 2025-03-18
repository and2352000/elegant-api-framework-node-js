import {  UserRepo } from '../repository/user';

export class UserService {
    constructor(private userRepo: UserRepo) { }

    async createUser(name: string) {
        return await this.userRepo.createUser(name)
    }
    async getUsers() {
        return await this.userRepo.getUsers();
    }

    async getUserById(id: number) {
        return await this.userRepo.getUserById(id);
    }

}
