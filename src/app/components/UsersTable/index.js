import Component from '../../../infra/Component';
import './UsersTable.scss';

export default class UsersTable extends Component {
  state = {
    users: [],
  }

  constructor(element, controller) {
    super();
    this.controller = controller;
    this.baseElement = element;

    this.setupEvents();
  }

  setupEvents() {
    this.baseElement.onclick = this.removeUser;
  }

  render() {
    this.baseElement.innerHTML = this.template();
  }

  removeUser = ({ target: clickTargetElement }) => {
    if (clickTargetElement.classList.contains('btn-remove')) {
      const userTr = clickTargetElement.closest('tr');
      const userTds = userTr.querySelectorAll('td');
      const userData = Array.from(userTds).reduce((acc, currentTd) => {
        const currentDataType = currentTd.getAttribute('data-type');
        acc[currentDataType] = currentTd.textContent;
        return acc;
      }, {});
      this.controller.remove(userData);
    }
  }

  template = () => `
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Email</td>
            <td>Telefone</td>
          </tr>
        </thead>
        <tbody>
          ${
            this.state.users.map(user => `
              <tr>
                <td data-type="nome">${user.getFullName()}</td>
                <td data-type="cpf">${user.getCPFFormated()}</td>
                <td data-type="email">${user.getEmail()}</td>
                <td data-type="telefone">${user.getPhoneFormated()}</td>
                <td><button class="btn-remove">Remover</button></td>
              </tr>
            `).join('')
          }
          ${
            this.state.users.length === 0 ? '<tr><td colspan="4" align="center">Nenhum usuário encontrado :(</td></tr>' : ''
          }
        </tbody>
      </table>
    `
}
