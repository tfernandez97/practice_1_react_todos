import React from 'react';
import './App.css';
import { CreateToDoButton } from './components/CreateToDoButton';
import { Modal } from './components/Modal';
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

			<TodoList />

			<CreateToDoButton />

			<Modal isOpen={openModal}>
				<TodoForm />
			</Modal>
		</React.Fragment>
	);
};
