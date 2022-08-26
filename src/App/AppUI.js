import React from 'react';
import './App.css';
import { CreateToDoButton } from './components/CreateToDoButton';
import { TodoCounter } from './components/ToDoCounter';
import { TodoForm } from './components/ToDoForm';
import { TodoList } from './components/ToDoList';
import { TodoSearch } from './components/ToDoSearch';
import { TodoContext } from './contexts/todoContexts';

export const AppUI = () => {
	const { openModal } = React.useContext(TodoContext);
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<main>
				<section>
					<TodoList />
				</section>

				<CreateToDoButton />

				<dialog open={openModal}>
					<TodoForm />
				</dialog>
			</main>
		</React.Fragment>
	);
};
