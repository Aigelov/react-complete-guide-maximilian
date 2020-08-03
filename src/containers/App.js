import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App] Constructor');
  }

  state = {
    persons: [
      { id: 'uuid_1', name: 'Max', age: 28 },
      { id: 'uuid_2', name: 'Annie', age: 29 },
      { id: 'uuid_3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    persons.forEach(person => {
      if (person.id === id) {
        person.name = event.target.value;
      }
    });

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
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
    console.log('[App] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}
        >
          Remove Cockpit
        </button>
        {
          this.state.showCockpit
            ? <Cockpit
              title={this.props.appTitle}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
            : null
        }
        {persons}
      </div>
    );
  }
}

export default App;
