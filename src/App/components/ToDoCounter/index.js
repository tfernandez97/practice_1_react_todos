import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';

export const TodoCounter = () => {
	const { totalTodos, totalCompletedTodos } = React.useContext(TodoContext);

	return (
		<header>
			<h2>
				You have {totalCompletedTodos} todo completed of {totalTodos} todo.
			</h2>
		</header>
	);
};
