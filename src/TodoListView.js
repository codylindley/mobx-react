import { observer, inject } from 'mobx-react';
import * as React from 'react';

import "./TodoListView.css";

const TodoView = ({ todo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => (todo.finished = !todo.finished)}
      />
      {todo.title}
    </li>
  );
}

@inject("todoListStore")
@observer 
class TodoListView extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoListStore.todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>
        Tasks left: {this.props.todoListStore.unfinishedTodoCount}
      </div>
    );
  }
}

export default TodoListView;

