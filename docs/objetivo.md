# Sobre o projeto

Uma página de fomulário que deve inserir um item no localStorage e outra página com a listagem dos dados inseridos no localStorage aparentemente pode ser um problema bem simples que pode ser resolvido com poucas linhas de código se o objetivo for fazer uma prova de conceito ou algo do gênero. No dia a dia do desenvolvimento é importante termos noção de quando faz sentido optar por uma solução robusta ou algo mais simples que em breve será descartado.

Mesmo o problema sendo algo simples, é muito fácil aplicar diversos conceitos avançados em cima de um projeto e planejar uma arquitetura que fique escalável a longo prazo, facilite refatorações e tenha uma boa separação das dependências do sistema (o que pode ajudar em uma migração futura).

O intuito desse projeto é ele ser uma prova de conceito de aplicação de diversos conceitos avançados de arquitetura e qualidade de código visando fazer uma entrega que possa ser evoluída e extendida com o passar do tempo.

Espero que o projeto possa servir de exemplo para quem tiver curiosidade de ver a implementação dos tópicos listados na próxima sessão e se tiver alguma sugestão sinta-se a vontade para mandar um pull request. Sugestões são sempre bem vindas e nos ajudam a melhorar como pessoas :)

## Recursos que envolvem qualidade de código

- Testes: Servem como uma documentação viva do projeto, ajuda a dar mais segurança em refatorações e a quebra em vários casos nos obriga a escrever um código que possua um baixo acoplamento. E seguindo um fluxo de desenvolvimento como o TDD pode ajudar a melhorar até a legibilidade do código escrito.
  - Ferramentas utilizadas: [Asserções(Chai)](http://chaijs.com/), [Mocks e Stubs(Sinon)](https://sinonjs.org/), [Framework de Testes (Mocha)](https://mochajs.org).
- Linter: Ajuda a ter um código mais padronizado entre o time, evita discussões desnecessárias como por exemplo "acho que todo array criado deveria ter ou não comma-dangle" e nos ajuda a entregar mais sem ter que ficar se preocupando em lembrar diversas regras
  - Ferramentas utilizadas: [ESLint](https://eslint.org/), [Airbnb JavaScript Styleguide](https://github.com/airbnb/javascript)
- Git hooks: De nada adianta ter testes e um linter se o desenvolvedor esquecer de utilizar, como todo projeto moderno, um sistema de versionamento como o git. Fiz questão de garantir que os testes sejam executados juntamente com o linter antes de cada commit ser feito.
  - Ferramentas utilizadas: [Husky](https://www.npmjs.com/package/husky)
- Continuous Integration: Para garantir que antes de ir para a branch master todo código está com os testes devidamente corretos.
  - Ferrramentas utilizadas: [CircleCI](http://circleci.com)

## Arquitetura CSS
- RSCSS: Durante muito tempo se discutiu como organizar componentes CSS e diversas soluções surgiram como: SMACSS, Atomic, SUITCSS... Dentre todas elas uma que utilizei durante bastante tempo foi o [BEM CSS](http://blog.alura.com.br/criando-componentes-css-com-padrao-bem/). Nos projetos em que mexi mais recentemente, principalmente aqueles em React, achei ele um pouco verboso. Então comcecei a adotar o RSCSS tanto pela sua simplicidade da aplicação em um projeto e ser menos verboso.
- ITCSS: Um projeto Front End real não é feito somente de pensar nos componentes CSS, a arquitetura e organização para facilitar o reuso de código impacta bastante no quão o projeto pode ser escalável e o quão fácil é dar manutenção no mesmo, por isso adotei a estrutura de pastas do [ITCSS](https://github.com/ahmadajmi/awesome-itcss).
- Pré-processador: Optei por escolher o [SASS](https://sass-lang.com/), pois é o que possuo mais familiaridade em comparação com outros pré-processadores. Dado que todos os concorrentes mais populares resolvem o mesmo problema variando apenas a sintaxe, o ganho real do uso do pré-processador foi facilitar ainda mais a criação dos componentes no estilo do RSCSS.

## Arquitetura JavaScript
- Onion Architechture: O projeto foi todo baseado em uma arquitetura em camadas focando em 3 principais: Aplicação, Domínio e Infraestrutura. Cada camada nunca acessa a anterior diretamente na respectiva ordem e toda comunicação entre elas é feita baseada em serviços com adaptadores entre as trocas de camadas para minimizar efeitos colaterais em casos de refatorações locais e ajustes.
- DDD: [Desde o lançamento do livro do Erick Evans](https://www.amazon.com.br/Domain-Driven-Design-Eric-Evans/dp/8550800651?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_726685122_54292137521_242594579893_aud-519888259198:pla-398510643241_c_) o conceito por tras do DDD se popularizou bastante. Alguns nomes como linguagem obiqua, value objects, a ideia de separar bem o domínio da aplicação como um core e arquitetar bem as camadas casa muito bem com a *Onion Architechture* e força um uso mais bem planejado dos conceitos de Orientação a Objetos.
- FluentValidations: Validações em sistemas sempre é algo que me intrigou bastante. Depois que comecei a estudar mais a fundo orientação a objetos curti bastante a ideia de trabalhar com um formato descritivo de validações que são as validações por contrato. Existem algumas libs que implementam essa lógica como por exemplo o [JOI](https://www.npmjs.com/package/joi), e gostei bastante da experiência de [criar uma com uma API](https://github.com/omariosouto/formidable/blob/master/tests/unity/infra/FluentValidator/index.test.js) que fosse possível tanto validar os itens, quanto passar mensagens customizadas.
- JavaScript Orientado a Objetos: Trabalhar com JavaScript orientado a objetos pode ser um desafio, principalmente para quem está acostumado com linguagens fortemente tipadas. Mas muitos dos conceitos podem ser aplicados na linguagem com uma adaptação ou outra e neste projeto encaixou bem.

