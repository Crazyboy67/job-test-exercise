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
		data.forEach((item) => {
			if (item.Name === '') emptyKeys.push('Name');
			if (item.Email === '') emptyKeys.push('Email');
			if (item.JobTitle === '') emptyKeys.push('JobTitle');
			if (item.Age >= 18) emptyKeys.push('Age');
			if (item.CV === '') emptyKeys.push('CV');
		});
	} else {
		console.log(data.NumberOfEmployees < 1 || data.NumberOfEmployees > 100);
		if (data.CompanyName === '') emptyKeys.push('CompanyName');
		if (data.CompanyEmail === '') emptyKeys.push('CompanyEmail');
		if (data.NumberOfEmployees < 1 || data.NumberOfEmployees > 100)
			emptyKeys.push('NumberOfEmployees');
	}

	if (emptyKeys.length > 0) {
		return emptyKeys;
	} else {
		return [];
	}
}
