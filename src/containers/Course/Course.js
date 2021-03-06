import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
  render () {
    const queryParams = queryString.parse(this.props.history.location.search);
    return (
      <div>
        <h1>{queryParams.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;