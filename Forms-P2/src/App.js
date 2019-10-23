import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "Blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <textarea
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    name="isFriendly"
                    type="checkbox"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                /> isFriendly?
                 <br />
                <input
                    name="gender"
                    type="radio"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                /> Male
                 <br />
                <input
                    name="gender"
                    type="radio"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                /> Female
                <br />
                <label>Favorite Color</label>
                <br />
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>

                </select>

                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your color is {this.state.favColor}</h2>
            </form>
        )
    }
}

export default App
