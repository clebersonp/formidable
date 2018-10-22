export const newUserValidationSchema = {
  'nome': (value, contract) =>
    contract
      .validate('nome', value)
      .isRequired(),
  'email': (value, contract) =>
    contract
      .validate('email', value)
      .isRequired('O campo email é obrigatório')
      .isEmail('Informe um e-mail válido'),
  // 'cpf': (value, contract) => contract.validate('cpf', value).isRequired().isCPF(),
  // 'telefone': (value, contract) => contract.validate('telefone', value).isRequired('O campo telefone é obrigatório').hasMinLength(10, 'Informe um telefone válido'),
}
