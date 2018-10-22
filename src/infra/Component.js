export class Component {
  setState = (newState) => {
    requestAnimationFrame(() => {
      this.state = {
        ...this.state,
        ...newState
      }
      this.render()
    })
  }
}
