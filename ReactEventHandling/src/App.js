import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function handleOver() {
    console.log("I was moused over")
}

function App() {
    return (
        <div>
            <img onMouseOver={handleOver} alt="bill" src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App