import React from 'react';
import { TodoContext } from '../../contexts/todoContexts';
import './toDoSearch.css';

export const TodoSearch = () => {
	const { setSearchValue } = React.useContext(TodoContext);

	const seachInTodoList = ({ target: { value } }) => {
		setSearchValue(value);
	};

	return (
		<label className="labelSearch">
			<span className="icon">
				<svg className="icon-search" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M33.8 36L20.65 22.85C19.65 23.7167 18.4833 24.3917 17.15 24.875C15.8167 25.3583 14.4 25.6 12.9 25.6C9.3 25.6 6.25 24.35 3.75 21.85C1.25 19.35 0 16.3333 0 12.8C0 9.26667 1.25 6.25 3.75 3.75C6.25 1.25 9.28333 0 12.85 0C16.3833 0 19.3917 1.25 21.875 3.75C24.3583 6.25 25.6 9.26667 25.6 12.8C25.6 14.2333 25.3667 15.6167 24.9 16.95C24.4333 18.2833 23.7333 19.5333 22.8 20.7L36 33.8L33.8 36ZM12.85 22.6C15.55 22.6 17.85 21.6417 19.75 19.725C21.65 17.8083 22.6 15.5 22.6 12.8C22.6 10.1 21.65 7.79167 19.75 5.875C17.85 3.95833 15.55 3 12.85 3C10.1167 3 7.79167 3.95833 5.875 5.875C3.95833 7.79167 3 10.1 3 12.8C3 15.5 3.95833 17.8083 5.875 19.725C7.79167 21.6417 10.1167 22.6 12.85 22.6V22.6Z"
						fill="currentColor"
					/>
				</svg>
			</span>
			<input className="labelSearch_input" id="search" type="text" onChange={(event) => seachInTodoList(event)} placeholder=" " />
			<span className="labelSearch_text">Buscar una tarea...</span>
			<div className="labelSearch_line"></div>
		</label>
	);
};
