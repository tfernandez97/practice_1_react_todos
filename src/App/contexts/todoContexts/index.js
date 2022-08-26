import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
	const { item: todo, setItem: setTodo, loading, error } = useLocalStorage({ itemName: 'todo_v1', initialValue: [] });
	const totalTodos = todo.length;
	const totalCompletedTodos = todo.filter((item) => !!item.completed).length;
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);

	let searchedTodo = searchValue.length > 0 ? todo.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : todo;

	const addTodo = ({ text = '' } = {}) => {
		let newTodo = [...todo, { text, completed: false }];
		setTodo(newTodo);
	};

	const updateTodo = ({ text = '' } = {}) => {
		if (!(todo.find((item) => item.text.toLowerCase() === text.toLowerCase()) ?? true)) return;
		let newTodo = [...todo];
		newTodo[todo.findIndex((item) => item.text.toLowerCase() === text.toLowerCase())].completed = true;
		setTodo(newTodo);
	};

	const deleteTodo = ({ text = '' } = {}) => {
		if (!(todo.find((item) => item.text.toLowerCase() === text.toLowerCase()) ?? true)) return;
		let newTodo = [...todo];
		newTodo.splice(
			todo.findIndex((item) => item.text.toLowerCase() === text.toLowerCase()),
			1
		);
		setTodo(newTodo);
	};

	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				totalTodos,
				totalCompletedTodos,
				searchValue,
				setSearchValue,
				openModal,
				setOpenModal,
				searchedTodo,
				addTodo,
				updateTodo,
				deleteTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
