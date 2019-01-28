import React, { Component } from 'react';
import PageTemplate from '../components/PageTemplate';
import TodoInputContainer from '../container/TodoInputContainer';
import TodoListContainer from '../container/TodoListContainer';

class App extends Component {

  render() {

    return (
      <div>
        <PageTemplate>
          <TodoInputContainer />
          <TodoListContainer />
        </PageTemplate>
      </div>
    );
  }
}

export default App;