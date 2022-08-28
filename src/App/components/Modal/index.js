import React from 'react';
import './Modal.css';

export const Modal = ({ children, isOpen }) => {
	isOpen
		? document.querySelector('body').classList.add('not-body-scroll')
		: document.querySelector('body').classList.remove('not-body-scroll');

	return (
		<dialog className="modalBase" open={isOpen}>
			{children}
		</dialog>
	);
};
