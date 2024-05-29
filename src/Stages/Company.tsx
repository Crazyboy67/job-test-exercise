import { ChangeEvent, FormEvent } from 'react';
import { InputCompanyState } from '../Hooks/useCompanyFrom';
import MissingFieldNotification from '../MissingFieldNotification';

interface CompanyProps {
	formData: InputCompanyState;
	errors: string[];
	handleChangeForm: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Company = ({
	formData,
	handleSubmit,
	errors,
	handleChangeForm,
}: CompanyProps) => {
	return (
		<>
			<h1>Company</h1>
			<form onSubmit={handleSubmit}>
				{errors.length > 0 && <MissingFieldNotification errors={errors} />}
				<label htmlFor="CompanyName">Company Name</label>
				<br />
				<input
					type="text"
					id="CompanyName"
					name="CompanyName"
					placeholder="Company name"
					defaultValue={formData.CompanyName}
					autoComplete="off"
					onChange={handleChangeForm}
				/>
				<br />
				<label htmlFor="CompanyEmail">Company Email</label> <br />
				<input
					type="text"
					id="CompanyEmail"
					name="CompanyEmail"
					placeholder="Company email"
					defaultValue={formData.CompanyEmail}
					autoComplete="off"
					onChange={handleChangeForm}
				/>{' '}
				<br />
				<label htmlFor="NumberOfEmployees">Number of Employees</label> <br />
				<input
					type="number"
					id="NumberOfEmployees"
					name="NumberOfEmployees"
					placeholder="Company email"
					defaultValue={formData.NumberOfEmployees}
					autoComplete="off"
					onChange={handleChangeForm}
				/>{' '}
				<br />
				<label htmlFor="Description">Description</label> <br />
				<textarea
					name="Description"
					id="Description"
					placeholder="Description"
					defaultValue={formData.Description}
					autoComplete="off"
					onChange={handleChangeForm}
				/>{' '}
				<br />
				<button type="submit">Next</button>
			</form>
		</>
	);
};

export default Company;
