import React from "react"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {

        let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
        let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"

        return (
            <div>
                <h2>{displayText}</h2>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
} 

export default App