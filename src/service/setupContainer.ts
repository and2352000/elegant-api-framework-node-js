import { UserService } from './user';
import { container, awilix } from '../lib/container';



export default function setupServiceContainer() {
  container.register({
    userService: awilix.asClass(UserService).singleton(),
  })
}