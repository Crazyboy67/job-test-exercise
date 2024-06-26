import { ChangeEvent, useState } from 'react';

const initialFormData = {
	CompanyName: '',
	CompanyEmail: '',
	NumberOfEmployees: 0,
	Description: '',
};

export interface InputCompanyState {
	CompanyName: string;
	CompanyEmail: string;
	NumberOfEmployees: number;
	Description: string;
}

export function useCompanyForm() {
	const [formData, setFormData] = useState<InputCompanyState>(initialFormData);

	const handleChangeForm = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return {
		formData,
		handleChangeForm,
	};
}
