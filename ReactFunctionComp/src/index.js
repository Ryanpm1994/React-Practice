import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return(
    <div>
      <h1>Ryan Miller</h1>
      <p>hjkdfhlh hjdhjkfhdsjklhklsjh jkdhsfkjhkfjdshklf dhshdsfjhkdsh l</p>
      <ol>
        <li>Spain</li>
        <li>America</li>
        <li>France</li>
      </ol>
    </div>
  )
}

ReactDOM.render(<MyInfo/>, document.getElementById("root"))