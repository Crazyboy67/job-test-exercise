type Employe = {
	Name: string;
	Email: string;
	JobTitle: string;
	Age: number;
	CV: string;
};

const Employee = ({
	formData,
	errors,
	handleChangeForm,
	handleSubmit,
	onPrev,
}: any) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				{formData.map((employee: Employe, index: number) => (
					<div key={index}>
						<h1>Employee {index + 1}</h1>
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
