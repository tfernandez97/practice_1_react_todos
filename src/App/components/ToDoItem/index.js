import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';

export const TodoItem = ({ item }) => {
	const { updateTodo, deleteTodo } = React.useContext(TodoContext);

	return (
		<li>
			<span onClick={() => updateTodo(item)} role="button" className="icon">
				<svg xmlns="http://www.w3.org/2000/svg" className="icon-done">
					<path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
				</svg>
			</span>
			<p>{item.text}</p>
			<span onClick={() => deleteTodo(item)} role="button" className="icon">
				<svg xmlns="http://www.w3.org/2000/svg" className="icon-trash">
					<path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
				</svg>
			</span>
		</li>
	);
};
