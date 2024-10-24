import React from "react"
import ReactDom from "react-dom"

const App = () => {
  return <div> Meu primeiro componente ReactJS </div>
}

ReactDom.render(
  <App />,
  document.querySelector("#root")
)