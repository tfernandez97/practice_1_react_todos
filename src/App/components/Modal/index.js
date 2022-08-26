import React from 'react';
import './Modal.css';

export const Modal = ({ children, isOpen }) => {
	return (
		<dialog className="modalBase" open={isOpen}>
			{children}
		</dialog>
	);
};
