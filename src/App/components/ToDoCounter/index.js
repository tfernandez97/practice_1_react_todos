import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import './ToDoCouner.css';

export const TodoCounter = () => {
	const { totalTodos, totalCompletedTodos } = React.useContext(TodoContext);

	return (
		<header className="header">
			<h2 className="header_title">
				Has completado {totalCompletedTodos} tareas de {totalTodos} tareas por hacer.
			</h2>
		</header>
	);
};
