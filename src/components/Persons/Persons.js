import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons] shouldComponentUpdate');

    return nextProps.persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons] componentDidUpdate', snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons] componentWillUnmount');
  }

  render() {
    console.log('[Persons] rendering...');

    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={event => this.props.changed(event, person.id)}
      >
        My Hobbies: Racing
      </Person>
    ));
  }
}

export default Persons;
