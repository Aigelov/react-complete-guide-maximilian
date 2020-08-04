import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  render() {
    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={event => this.props.changed(event, person.id)}
      />
    ))
  }
}

export default Persons;
