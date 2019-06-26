import React from 'react';
//import Radium, { StyleRoot } from 'radium';
import './Person.css'

const person = (props) => {
    // const style = {
    //     '@media (mind-width: 500px)' : {
    //         width: '450px'
    //     }
//     }

    //style={style}
    return (
        //children refers to any elements (inlcudes plain text) between the opening and closing tags
        //onChange is fired whenever the value for the input is changed
        <div className="Person" >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
    }

export default person;
//Radium(person) to wrap person up  