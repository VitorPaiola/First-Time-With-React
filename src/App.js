import React, { Component } from "react"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: "Vitor",
      contador: 0
    }

    // fazendo o bind da função para que ele possa ser acessado, ou seja, uma referência.
    this.Aumentar = this.Aumentar.bind(this)
    this.Diminuir = this.Diminuir.bind(this)

  }

  Aumentar() {
    let state = this.state
    state.contador += 1
    state.nome = "José"
    this.setState(state)
  }

  Diminuir() {
    let state = this.state

    if (state.contador === 0) {
      alert("Opa chegou a zero")
      return
    }

    state.contador -= 1
    state.nome = "Vitor"
    this.setState(state)

  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.Diminuir}>-</button> {this.state.contador}
          <button onClick={this.Aumentar}>+</button>
        </h3>
      </div>
    )
  }
}

export default App