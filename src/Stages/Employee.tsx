import { ChangeEvent, FormEvent } from 'react';
import { InputEmployeeState } from '../Hooks/useEmployeeForm';
import MissingFieldNotification from '../MissingFieldNotification';

interface EmployeeProps {
	formData: InputEmployeeState[];
	errors: string[];
	handleChangeForm: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	onPrev: () => void;
}

const Employee = ({
	formData,
	errors,
	handleChangeForm,
	handleSubmit,
	onPrev,
}: EmployeeProps) => {
	return (
		<>
			<h1>Employee(s)</h1>
			<form onSubmit={handleSubmit}>
				{errors.length > 0 && <MissingFieldNotification errors={errors} />}
				{formData.map((employee, index: number) => (
					<div key={index}>
						<h2>Employee {index + 1}</h2>
						<label htmlFor="Name">Name</label> <br />
						<input
							type="text"
							id="Name"
							name="Name"
							placeholder="Employee name"
							value={employee.Name}
							onChange={(e) => handleChangeForm(index, e)}
						/>
						<br />
						<label htmlFor="Email">Email</label> <br />
						<input
							type="text"
							id="Email"
							name="Email"
							placeholder="Employee email"
							value={employee.Email}
							onChange={(e) => handleChangeForm(index, e)}
						/>
						<br />
						<label htmlFor="JobTitle">Job Title</label> <br />
						<input
							type="text"
							id="JobTitle"
							name="JobTitle"
							placeholder="Employee job title"
							value={employee.JobTitle}
							onChange={(e) => handleChangeForm(index, e)}
						/>
						<br />
						<label htmlFor="Age">Age</label> <br />
						<input
							type="number"
							id="Age"
							name="Age"
							placeholder="Employee age"
							value={employee.Age}
							onChange={(e) => handleChangeForm(index, e)}
						/>
						<br />
						<label htmlFor="CV">CV</label> <br />
						<input
							type="file"
							id="CV"
							name="CV"
							placeholder="Employee CV"
							onChange={(e) => handleChangeForm(index, e)}
						/>
						<br />
					</div>
				))}
				<button onClick={onPrev}>Back</button>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Employee;
