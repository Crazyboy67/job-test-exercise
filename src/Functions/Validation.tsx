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
};

type Data = Company | Employee[];

export function formChecker(data: Data): Array<string> {
	const emptyKeys: string[] = [];
	if (Array.isArray(data)) {
		data.forEach((item, index) => {
			if (item.Name === '') emptyKeys.push(`${index} Name is required`);
			if (item.Email === '') emptyKeys.push(`${index} Email is required`);
			if (item.JobTitle === '') emptyKeys.push(`${index} JobTitle is required`);
			if (item.Age < 18)
				emptyKeys.push(`${index} Age is atleast 18 and required`);
			if (item.CV === '') emptyKeys.push(`${index} CV is required`);
			if (item.CV.split('.').pop() !== 'pdf')
				emptyKeys.push(`${index} CV must be a PDF file`);
		});
	} else {
		if (data.CompanyName === '') emptyKeys.push('Company name is required');
		if (data.CompanyEmail === '') emptyKeys.push('Company email is required');
		if (data.NumberOfEmployees < 1 || data.NumberOfEmployees > 100)
			emptyKeys.push('Number of Employees is between 1-100');
	}

	if (emptyKeys.length > 0) {
		return emptyKeys;
	} else {
		return [];
	}
}
