import { FormEvent, useState } from 'react';
import './App.css';
import { formChecker } from './Functions/Validation';
import { useCompanyForm } from './Hooks/useCompanyFrom';
import Company from './Stages/Company';
import Employee from './Stages/Employee';

function App() {
	const [currentStage, setCurrentStage] = useState(1);
	const [errors, setErrors] = useState<string[]>([]);

	const { formData, handleChangeForm } = useCompanyForm();

	const handleCompanySubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors([]);
		const errors = formChecker(formData);
		console.log(errors);
		if (errors.length === 0) {
			setCurrentStage(2);
		} else {
			setErrors(errors);
		}
	};

	const handleEmployeeSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handlePrev = () => {
		if (currentStage >= 2) {
			setCurrentStage(currentStage - 1);
		}
	};

	return (
		<>
			{currentStage === 1 ? (
				<Company
					formData={formData}
					handleSubmit={handleCompanySubmit}
					errors={errors}
					handleChangeForm={handleChangeForm}
				/>
			) : (
				<Employee handleSubmit={handleEmployeeSubmit} onPrev={handlePrev} />
			)}
		</>
	);
}

export default App;
