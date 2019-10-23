import React from "react"
import Joke from "./Joke"
import jokesData from "./JokeData"

function App() {

    const jokeComp = jokesData.map(joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchline={joke.punchLine}/>
        )
    })

    return (

        <div className="jokes">
           {jokeComp}
        </div>
    )
}

export default App