import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import './ToDoForm.css';

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
		<form onSubmit={catchData} id="formTodo" className="formTodo">
			<label className="labelText">
				<textarea className="labelText_input" name="text" placeholder=" "></textarea>
				<span className="labelText_text">Write your todo...</span>
				<div className="labelText_line"></div>
			</label>
			<button className="btnCancel" onClick={cancelAdd} type="button">
				Cancel
			</button>
			<input className="btnAdd" type="submit" value="add" />
		</form>
	);
};
