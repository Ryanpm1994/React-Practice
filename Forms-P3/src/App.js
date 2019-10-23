import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const{name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
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

                    <input
                        type="text"
                        value={this.state.age}
                        name="age" 
                        placeholder="Age"
                        onChange={this.handleChange} 
                    />
                    <br />
                    
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />Female
                    <br />
                    <select
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="">Please Select Option...</option>
                        <option value="Spain">Spain</option>
                        <option value="America">America</option>
                        <option value="Norway">Norway</option>
                        <option value="Scotland">Scotland</option>


                    </select>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions: </p>
                <p>Vegan:{this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher:{this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free:{this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
