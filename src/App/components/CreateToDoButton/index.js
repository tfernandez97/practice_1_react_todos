import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import './CreateToDoButton.css';

export const CreateToDoButton = () => {
	const { setOpenModal } = React.useContext(TodoContext);

	return (
		<button className="btnTodo" onClick={() => setOpenModal(true)}>
			+
		</button>
	);
};
