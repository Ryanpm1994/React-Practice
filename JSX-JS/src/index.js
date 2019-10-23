import React from "react"
import ReactDOM from "react-dom"

function App() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const firstname = "Ryan"
    const lastname = "Miller"

    if (hours < 12) {
        timeOfDay = "Morning"
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    }
    else {
        timeOfDay = "Night"
    }



    return (

        <h1>{`${timeOfDay} ${firstname} ${lastname}`}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))