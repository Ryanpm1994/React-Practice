import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                {/* {<ChildComp answer={this.state.answer}/>} */}
            </div>
        )
    }
}

export default App