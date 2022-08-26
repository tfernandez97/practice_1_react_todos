import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';

export const TodoForm = () => {
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const catchData = (event) => {
		event.preventDefault();
		let form = Object.fromEntries(new FormData(event.target));
		if (!validInput({ key: 'text', type: 'string' }, form)) return;
		addTodo(form);
		event.target.reset();
		setOpenModal(false);
	};

	const cancelAdd = () => {
		document.querySelector('#formTodo').reset();
		setOpenModal(false);
	};

	const validInput = ({ key, type }, Form) => {
		const cases = {
			string: () => typeof Form[key] === 'string',
			number: () => typeof Form[key] === 'number',
			boolean: () => typeof Form[key] === 'boolean',
			Array: () => Array.isArray(Form[key]),
			Object: () => typeof Form[key] === 'object',
		};

		return cases[type] ? cases[type]() : false;
	};

	return (
		<form onSubmit={catchData} id="formTodo">
			<label>
				<span>Write your todo.</span>
				<textarea name="text" placeholder="Clean the home"></textarea>
			</label>
			<button onClick={cancelAdd} type="button">
				Cancel
			</button>
			<input type="submit" value="add" />
		</form>
	);
};
