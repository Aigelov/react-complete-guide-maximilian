import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'uuid_1', name: 'Max', age: 28 },
      { id: 'uuid_2', name: 'Annie', age: 29 },
      { id: 'uuid_3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // const personIndex = this.state.persons.findIndex(person => {
    //   return person.id === id;
    // });
    // const person = {...this.state.persons[personIndex]};
    // person.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[personIndex] = person;

    const persons = [...this.state.persons];
    persons.forEach(person => {
      if (person.id === id) {
        person.name = event.target.value;
      }
    });

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render () {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              >My Hobbies: Racing</Person>
            ))
          }
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className="button"
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
