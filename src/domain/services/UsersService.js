import User from '../entities/User';
import UsersRepository from '../../infra/repositories/UsersRepository';

const addNew = (formElementsDTO) => {
  const user = new User(formElementsDTO);
  const usersRepository = new UsersRepository();
  return usersRepository.insert(user);
};

export default {
  addNew,
};
