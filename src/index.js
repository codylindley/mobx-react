import { observable, computed } from 'mobx';
import { Provider } from 'mobx-react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import TodoListView from "./TodoListView.js";
import registerServiceWorker from "./registerServiceWorker";

const todoStore = title => {
	return {
		@observable title: title,
		@observable finished: false,
		id: Math.random()
	};
};

const todoListStore = {
	@observable todos: [],
	@computed get unfinishedTodoCount() {
	return todoListStore.todos.filter(todo => !todo.finished).length;
	}
};

ReactDOM.render(
	<Provider todoListStore={todoListStore}>
		<TodoListView />
	</Provider>,
	document.getElementById("root")
);

todoListStore.todos.push(
	todoStore("Get Coffee"),
	todoStore("Write simpler code")
);

todoListStore.todos[0].finished = true;

registerServiceWorker();
