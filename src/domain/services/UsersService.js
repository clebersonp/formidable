import User from '../entities/User';

export default class UsersService {
  constructor({ usersRepository }) {
    this.usersRepository = usersRepository;
  }

  addNew = (formElementsDTO) => {
    const user = new User(formElementsDTO);
    return new Promise((resolve) => {
      resolve(this.usersRepository.insert(user));
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

  getExternalUsers = () => fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
    .then((response) => {
      if (response.ok) return response.json();
      return response;
    })
    .then((users) => {
      const addUsersPromises = users.map(user => this.usersRepository.insert(new User({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone,
      })));
      return Promise.all(addUsersPromises);
    })
    .then(() => this.getAll());

  getAllWithInitialData = () => {
    const hasUsersFromRepository = this.usersRepository.getAll().length > 0;
    if (hasUsersFromRepository) {
      return this.getAll();
    }
    return this.getExternalUsers();
  };
}
