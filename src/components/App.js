import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

  state = {
    input: '', // input 값
    // 일정 데이터 초깃값
    todos: [
      {id:0, text: '리액트 공부하기', done: true},
      {id:1, text: '컴포넌트 스타일링 해보기', done: false}
    ]
  }

  id = this.state.todos.length;
  getId = () => this.id++;

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = () => {
    const { input, todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: this.getId(),
          text: input,
          done: false
        }
      ]
    });
  }

  handleToggle = (id) => {console.log('handleToggle');
    const { todos } = this.state;
    const newTodos = todos.map(todo => 
      (todo.id === id) 
        ? {
            id: todo.id,
            text: todo.text,
            done: !todo.done
          }
        : todo
    );
    this.setState({
      todos: newTodos
    });
  }

  handleRemove = (id) => {console.log('handleRemove');
  
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  }

 

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <div>
        <PageTemplate>
          <TodoInput value={input} onChange={handleChange} onInsert={handleInsert} />
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </PageTemplate>
      </div>
    );
  }
}

export default App;