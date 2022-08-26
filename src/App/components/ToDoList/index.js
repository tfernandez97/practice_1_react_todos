import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import { TodoItem } from '../ToDoItem';
import './ToDoList.css';

export const TodoList = () => {
	const { searchedTodo, searchValue, totalTodos } = React.useContext(TodoContext);

	if (totalTodos === 0 && searchValue.length === 0) {
		return (
			<section className="sectionTodo">
				<p className="textInfo">Create your first todo...</p>;
			</section>
		);
	}
	if (searchedTodo.length === 0 && searchValue.length > 0) {
		return (
			<section className="sectionTodo">
				<p className="textInfo">todo not found</p>
			</section>
		);
	}

	return (
		<section className="sectionTodo">
			<ul className="listTodo">
				{searchedTodo.map((item) => (
					<TodoItem key={item.text} item={item} />
				))}
			</ul>
		</section>
	);
};
