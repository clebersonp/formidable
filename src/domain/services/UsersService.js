/* eslint no-use-before-define: ["error", { "functions": false }] */
import User from '../entities/User';
import UsersRepository from '../../infra/repositories/UsersRepository';

const addNew = (formElementsDTO) => {
  const user = new User(formElementsDTO);
  const usersRepository = new UsersRepository();
  return new Promise((resolve) => {
    setTimeout(() => resolve(usersRepository.insert(user)), 1000);
  });
};

const getAll = () => {
  const usersRepository = new UsersRepository();
  const hasUsersFromRepository = usersRepository.getAll().length > 0;

  if (hasUsersFromRepository) {
    return new Promise((resolve) => {
      const listOfDomainUsers = usersRepository.getAll().map(user => new User({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone,
      }));
      resolve(listOfDomainUsers);
    });
  }
  return getExternalUsers();
};

function getExternalUsers() {
  const usersRepository = new UsersRepository();

  return fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
    .then((response) => {
      if (response.ok) return response.json();

      return response;
    })
    .then((users) => {
      const addUsersPromises = users.map(user => usersRepository.insert(new User({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone,
      })));
      return Promise.all(addUsersPromises);
    })
    .then(() => getAll());
}

export default {
  addNew,
  getAll,
};
