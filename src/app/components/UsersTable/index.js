import Component from '../../../infra/Component'
import "./UsersTable.scss"

export class UsersTable extends Component {

  state = {
    users: []
  }

  constructor(element) {
    super()
    this._baseElement = element
  }

  render() {
    this._baseElement.innerHTML = this._template()
  }

  _template = () => {
    return `
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
          ${this.state.users.map((user) => {
            return `
              <tr>
                <td>${user.fullName}</td>
                <td>${user.cpfFormated}</td>
                <td>${user.email}</td>
                <td>${user.phoneFormated}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `
  }
}
