import React, {Component} from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person.js'

class App extends Component {
  //state is simply a property of app, however it is a special property
  //if we change the state, it will late react to re-render our DOM
  state = {
    persons: [
      {id: 'asdf', name: 'Andrew Tran', age: 16},
      {id: 'qwerty', name: 'Jordan Smith', age: 15},
      {id: 'abc', name: 'David Toomer', age: 18}
    ],
    otherState: 'Some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {

    
    //console.log('It\'s working!')
    //DONT DO THIS: this.state.persons[0].name = 'Andrew H. Tran'
    //the Component object has the setState method
    //setState() takes an object as an argument and will merge it into the current state
    //in this, we are overriding the persons state but leaving the otherState untouched
    this.setState({persons: [
      {name: newName, age: 16},
      {name: 'Jordan B. Smith', age: 15}
    ]
  })
  }

  nameChangedHandler = (event, id) => {
    //to make our code more efficient, we want to update our state BUT only for the person we edited
    //find the element in the array AND finds its index too
    const personIndex = this.state.persons.findIndex((p => {
      //return true or false depending on if it was the element i was looking for not. 
      //will return FALSE if person.id does not equal id
      return p.id === id;
    }));

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonsHandler = (personIndex) => {
    //the slice method creates a new array and copies it
    //const persons = this.state.persons.slice;

    //this creates a copy of this.state.persons
    const persons = [...this.state.persons]
    //the splice will take the index from the array
  
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //sets the state to NOT this.state.showPerons, which is just the boolean value true
    this.setState({showPersons: !doesShow});
  }

  render() {  
    //EVERYTHING in the render method is run

    //in-line styling
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };
//by default, persons is equal to null. But if this.state.showPersons is true, then you make persons equal to the div
let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person name={person.name} 
        age={person.age}
        //we put (event) because it is executed when an event is made
        changed={(event) => this.nameChangedHandler(event, person.id)}
        click={() => this.deletePersonsHandler(index)}
        //we put this key here to let react know which element changed so that it doesn't re-render the entire list every time
        key={person.id}></Person>
      })}

    {/* <Person 
     name={this.state.persons[0].name}
     age={this.state.persons[0].age}
     //'this' in bind refers to the 'this' in this.setState. The second argument is what we want to change the name to
     click={this.switchNameHandler.bind(this, 'Andrew!!!')}
     changed={this.nameChangedHandler}>My hobbies: Coding</Person>

    <Person 
    name={this.state.persons[1].name} 
    age={this.state.persons[1].age}>My hobbies: React JS</Person> */}
    </div>
  )
  //we can change the style like this dynamically with in-line styling
style.backgroundColor = 'red'

}

let classes = []; //joins the two strings into 'red bold'
if (this.state.persons.length <= 2) {
  classes.push('red'); //classes = ['red']
}
if (this.state.persons.length <= 1) {
  classes.push('bold'); //classses = ['red', 'bold']
}
if (this.state.persons.length == 0) {
  document.getElementById("working").innerText = "BRUH"

}
//THIS IS NOT HTML!!!! this is JSX
//do not put () when executing functions or else it will IMMEDIATELY run the program once react executes itself
    return (
     
  
    <div className="App">
      <h1>Hello, I am a React App</h1>
      <p className={classes.join(' ')} id="working">This is really working!</p>

      <button
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Names/Change Name</button>

      {persons}
    </div>
  
    );
    }
   //React.createElement takes 3 arguments: what you want to send to DOM, configuration for this (JS Object, null, etc.), amount of children 
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?") )
}


// function App() {
//   return (
    
//   );
 
// }

export default App;
