import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component{

    render() {
        return(
            <div>
                <Header username="GreenTech94"/>
                <Greeting/>
            </div>
        )
    }

}

class Header extends React.Component{

    render() {
        return(
            <header>
            <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }

}

class Greeting extends React.Component{

    render() {

        const date = new Date()
        const hours = date.getHours()
        let timeofDay

        if (hours < 12) {
            timeofDay = "Morning"
        }
        else if (hours > 12 && hours < 17 ) {
            timeofDay = "Afternoon"
        }
        else {
            timeofDay = "Evening"
        }

        return(
            <h1>Good {timeofDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))