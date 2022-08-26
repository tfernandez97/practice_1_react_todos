import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';

export const CreateToDoButton = () => {
	const { setOpenModal } = React.useContext(TodoContext);

	return <button onClick={() => setOpenModal(true)}>+</button>;
};
