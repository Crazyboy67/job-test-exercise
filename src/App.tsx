import { FormEvent, useState } from 'react';
import './css/main.css';
import { formChecker } from './Functions/Validation';
import { InputCompanyState, useCompanyForm } from './Hooks/useCompanyFrom';
import { InputEmployeeState, useEmployeeForm } from './Hooks/useEmployeeForm';
import Modal from './Modal';
import Company from './Stages/Company';
import Employee from './Stages/Employee';

export interface CombinedState extends InputCompanyState {
	Employees: InputEmployeeState[];
}

function App() {
	const [currentStage, setCurrentStage] = useState(1);
	const [errors, setErrors] = useState<string[]>([]);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [submittedData, setSubmittedData] = useState<CombinedState>();

	const { formData, handleChangeForm } = useCompanyForm();

	const { formEmployeeData, handleChangeEmployeeForm, setFormCount } =
		useEmployeeForm(formData.NumberOfEmployees);

	const handleCompanySubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors([]);
		const errors = formChecker(formData);
		if (errors.length === 0) {
			setCurrentStage(2);
			setFormCount(Number(formData.NumberOfEmployees));
		} else {
			setErrors(errors);
		}
	};

	const handleEmployeeSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errors = formChecker(formEmployeeData);
		if (errors.length === 0) {
			setErrors([]);
			const submitData: CombinedState = {
				...formData,
				Employees: formEmployeeData,
			};
			// const JSON_string = JSON.stringify(submitData);
			//End point here
			setSubmittedData(submitData);
			setShowModal(true);
		} else {
			setErrors(errors);
		}
	};

	const handlePrev = () => {
		if (currentStage >= 2) {
			setCurrentStage(currentStage - 1);
		}
	};
	return (
		<div className="main_body">
			{currentStage === 1 ? (
				<Company
					formData={formData}
					handleSubmit={handleCompanySubmit}
					errors={errors}
					handleChangeForm={handleChangeForm}
				/>
			) : (
				<Employee
					formData={formEmployeeData}
					errors={errors}
					handleChangeForm={handleChangeEmployeeForm}
					handleSubmit={handleEmployeeSubmit}
					onPrev={handlePrev}
				/>
			)}
			{showModal && submittedData && (
				<Modal formData={submittedData} setModal={setShowModal} />
			)}
		</div>
	);
}

export default App;
