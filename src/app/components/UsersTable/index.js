import Component from '../../../infra/Component';
import './UsersTable.scss';

export default class UsersTable extends Component {
  state = {
    users: [],
  }

  constructor(element) {
    super();
    this.baseElement = element;
  }

  render() {
    this.baseElement.innerHTML = this.template();
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
          ${this.state.users.map(user => `
              <tr>
                <td>${user.fullName}</td>
                <td>${user.getCPFFormated()}</td>
                <td>${user.email}</td>
                <td>${user.getPhoneFormated()}</td>
              </tr>
            `).join('')}
        </tbody>
      </table>
    `
}
