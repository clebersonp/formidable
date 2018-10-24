import 'jsdom-global/register';
import '../../mocks/requestAnimationFrame';

import { expect } from '../setup'
import Component from '../../../src/infra/Component'


class DynamicListComponent extends Component {

  constructor(element) {
    super();
    this.state = {
      items: []
    }
    this.baseElement = element;
  }

  render() {
    this.baseElement.innerHTML = (
      `
      <ul>
        ${this.state.items.map(item => `<li>${item.name}</li>`).join('')}
      </ul>
    `
    );
  }
}

describe('infra/Component', () => {
  it('should exists', () => {
    expect(Component).to.exist;
  })

  it('should render a component inside a base element', () => {
    const baseElement = document.createElement('div')
    const dynamicListComponent = new DynamicListComponent(baseElement)
    dynamicListComponent.setState({
      items: [{ name: 'Test Name' }]
    })
    expect(dynamicListComponent.baseElement.innerHTML).to.have.string('<ul>');
    expect(dynamicListComponent.baseElement.innerHTML).to.have.string('<li>');
    expect(dynamicListComponent.baseElement.innerHTML).to.have.string('Test Name');

    dynamicListComponent.setState({
      items: [{ name: 'Test Name 2' }]
    })
    expect(dynamicListComponent.baseElement.innerHTML).to.have.string('Test Name 2');
  })
})
