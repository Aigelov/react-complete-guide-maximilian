import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit] useEffect');
    // Htp request...
    const timer = setTimeout(() => {
      console.log('----- Saved data to cloud -----');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit] Cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit] 2nd useEffect');

    return () => {
      console.log('[Cockpit] Cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  );
};

export default Cockpit;
