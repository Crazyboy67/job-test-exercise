import { Dispatch, SetStateAction } from 'react';
import { CombinedState } from './App';
import './css/modal.css';

interface ModalProps {
	formData: CombinedState;
	setModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ formData, setModal }: ModalProps) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-body">
					<h1>Company</h1>
					<p>Company name: {formData.CompanyName}</p>
					<p>Company email: {formData.CompanyEmail}</p>
					<p>Number of Employees: {formData.NumberOfEmployees}</p>
					{formData.Description !== '' && (
						<p>Description: {formData.Description}</p>
					)}
					<h1>Employees</h1>
					{formData.Employees.map((item, index: number) => (
						<div key={index}>
							<p>
								{index + 1} Employee name: {item.Name}
							</p>
							<p>
								{index + 1} Employee email: {item.Email}
							</p>
							<p>
								{index + 1} Employee age: {item.Age}
							</p>
							<p>
								{index + 1} Employee Job title: {item.JobTitle}
							</p>
							<a href={item.CV} target="blank">
								{index + 1} Employee CV
							</a>
						</div>
					))}
				</div>
				<div className="modal-footer">
					<button type="button" onClick={() => setModal(false)}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
