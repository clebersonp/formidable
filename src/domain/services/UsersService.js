import User from '../entities/User';
import { EXTERNAL_SERVICE_URL } from './configs';

export default class UsersService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  addNew = (formElementsDTO) => {
    const user = new User(formElementsDTO);
    return new Promise((resolve, reject) => {
      const insertUserResult = this.usersRepository.insert(user);
      if (insertUserResult instanceof Error) reject(insertUserResult);

      resolve(insertUserResult);
    });
  }

  getAll = () => new Promise((resolve) => {
    const listOfDomainUsers = this.usersRepository.getAll().map(user => new User({
      cpf: user.cpf,
      email: user.email,
      fullName: user.name,
      phone: user.phone,
    }));
    resolve(listOfDomainUsers);
  });

  deleteUser = (removableUserDTO) => {
    const user = new User(removableUserDTO);
    this.usersRepository.remove(user);
    return new Promise((resolve) => {
      resolve({ message: 'removed with success' });
    });
  }

  insertExternalUsers = () => fetch(EXTERNAL_SERVICE_URL)
    .then((response) => {
      if (response.ok) return response.json();
      return response;
    })
    .then((users) => {
      users.forEach(user => this.usersRepository.insert(new User({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone,
      })));

      return this.getAll();
    })

  getAllWithInitialData = () => {
    const hasUsersFromRepository = this.usersRepository.getAll().length > 0;
    if (hasUsersFromRepository) {
      return this.getAll();
    }
    return this.insertExternalUsers();
  };
}
