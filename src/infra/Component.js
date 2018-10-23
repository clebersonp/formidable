export default class Component {
  constructor() {
    this.setState();
  }

  setState = (newState) => {
    requestAnimationFrame(() => {
      this.state = {
        ...this.state,
        ...newState,
      };
      this.render();
    });
  }
}
