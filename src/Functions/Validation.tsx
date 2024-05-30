type Company = {
	CompanyName: string;
	CompanyEmail: string;
	NumberOfEmployees: number;
	Description: string;
};

type Employee = {
	Name: string;
	Email: string;
	JobTitle: string;
	Age: number;
	CV: string;
	FileName: string;
};

type Data = Company | Employee[];

export function formChecker(data: Data): Array<string> {
	const emptyKeys: string[] = [];
	if (Array.isArray(data)) {
		data.forEach((item, index) => {
			if (item.Name === '') emptyKeys.push(`${index + 1} Name is required`);
			if (item.Email === '') emptyKeys.push(`${index + 1} Email is required`);
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.Email))
				emptyKeys.push(`${index + 1} Email needs to be a valid email`);
			if (item.JobTitle === '')
				emptyKeys.push(`${index + 1} JobTitle is required`);
			if (item.Age < 18)
				emptyKeys.push(`${index + 1} Age is atleast 18 and required`);
			if (item.CV === '') emptyKeys.push(`${index + 1} CV is required`);
			if (item.FileName.split('.').pop() !== 'pdf')
				emptyKeys.push(`${index + 1} CV must be a PDF file`);
		});
	} else {
		console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.CompanyEmail));
		if (data.CompanyName === '') emptyKeys.push('Company name is required');
		if (data.CompanyEmail === '') emptyKeys.push('Company email is required');
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.CompanyEmail))
			emptyKeys.push('Company email needs to be a valid email');
		if (data.NumberOfEmployees < 1 || data.NumberOfEmployees > 100)
			emptyKeys.push('Number of Employees is between 1-100');
	}

	if (emptyKeys.length > 0) {
		return emptyKeys;
	} else {
		return [];
	}
}
