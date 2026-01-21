// Task1:Write jsx for a componenet that display's a user's profile using props.

import React from "react";

// Child

let Props1=(props)=>{

    return(
        <div>
            <h3>Name:{props.name}</h3>
            <p>Course:{props.course}</p>
            <p>Section:{props.section}</p>
            <p>ID:{props.id}</p>
        </div>
        
    )
}
export default Props1;