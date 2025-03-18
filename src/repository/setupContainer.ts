import { container, awilix } from '../lib/container';
import { UserRepo } from './user';      


export default function setupContainer() {
container.register({
    userRepo: awilix.asClass(UserRepo).singleton(),
    })
}