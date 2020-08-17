import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {
//   return import('./NewPost/NewPost');
// });
const NewPost = React.lazy(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  activeClassName="active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/*{ Lazy loading other way by hoc }*/}
          {/*{ this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }*/}
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <NewPost />
              </Suspense>
            )}
          />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts/" />
          {/*{ Catch unknown routes }*/}
          {/*<Route render={() => <h2>Not found</h2>} />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
