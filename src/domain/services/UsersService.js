import User from "../entities/User";
import UsersRepository from '../../infra/repositories/UsersRepository'

export default class UsersService {
  addNew(formElementsDTO) {
    const user = new User(formElementsDTO);
    const usersRepository = new UsersRepository();
    return usersRepository.insert(user)
  }
}
