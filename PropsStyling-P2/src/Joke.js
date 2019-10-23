import React from "react"

function Joke(props) {
    return(
        <div className="joke-card">
            <h2 style={{display: props.question ? "block" : "none"}}> Question: {props.question} </h2>
            <h2 style={{color: !props.question && "888888"}}>Punchline: {props.punchline} </h2>
            <br/>
        </div>
    )
}

export default Joke