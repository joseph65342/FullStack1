import React from "react";
import Courses from "./courses";


const Student = (props) => {
    return(
        <div style={{"backgroundColor": 'cyan', "border": '2px dashed black'}}>
            Student <b>{props.name}</b> with student number <b>{props.number}</b> <Courses enrolled={props.enrolled} />
        </div>
    )
}

export default Student;