import React from "react";
import "./App.css";

// U zagradi, umjesto (props), moze da stoji ({name, message})
function Tweet(props) {
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;