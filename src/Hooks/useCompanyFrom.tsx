import { ChangeEvent, useState } from 'react';

const initialFormData = {
	Name: '',
	Email: '',
	NumberOfEmployees: 0,
	Description: '',
};

interface InputCompanyState {
	Name: string;
	Email: string;
	NumberOfEmployees: number;
	Description: string;
}

export function useCompanyForm() {
	const [formData, setFormData] = useState<InputCompanyState>(initialFormData);

	const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return {
		formData,
		handleChangeForm,
	};
}
