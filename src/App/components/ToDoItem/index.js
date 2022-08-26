import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import './ToDoItem.css';

export const TodoItem = ({ item }) => {
	const { updateTodo, deleteTodo } = React.useContext(TodoContext);

	return (
		<li className={`todoItem ${item?.completed && 'completed'}`}>
			<span onClick={() => updateTodo(item)} role="button" className="icon btn_doneTodo">
				<svg className="icon-done" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.2 23.5L0 12.3L2.15 10.15L11.2 19.2L30.4 0L32.55 2.15L11.2 23.5Z" fill="currentColor" />
				</svg>
			</span>
			<p className="todoItem_text">{item.text}</p>
			<span onClick={() => deleteTodo(item)} role="button" className="icon btn_deleteTodo">
				<svg className="icon-trash" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.05 36C4.21667 36 3.50833 35.7083 2.925 35.125C2.34167 34.5417 2.05 33.8333 2.05 33V4.5H0V1.5H9.4V0H22.6V1.5H32V4.5H29.95V33C29.95 33.8 29.65 34.5 29.05 35.1C28.45 35.7 27.75 36 26.95 36H5.05ZM26.95 4.5H5.05V33H26.95V4.5ZM10.35 28.7H13.35V8.75H10.35V28.7ZM18.65 28.7H21.65V8.75H18.65V28.7ZM5.05 4.5V33V4.5Z"
						fill="currentColor"
					/>
				</svg>
			</span>
		</li>
	);
};
