import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import { TodoItem } from '../ToDoItem';

export const TodoList = () => {
	const { searchedTodo, searchValue, totalTodos } = React.useContext(TodoContext);

	if (totalTodos === 0 && searchValue.length === 0) {
		return <p>Create your first todo</p>;
	}
	if (searchedTodo.length === 0 && searchValue.length > 0) {
		return <p>todo not found</p>;
	}

	return (
		<React.Fragment>
			<ul>
				{searchedTodo.map((item) => (
					<TodoItem key={item.text} item={item} />
				))}
			</ul>
		</React.Fragment>
	);
};
