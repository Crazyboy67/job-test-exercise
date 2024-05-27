import MissingFieldNotification from '../MissingFieldNotification';

const Company = ({ formData, handleSubmit, errors, handleChangeForm }: any) => {
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
