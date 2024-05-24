import { ChangeEvent, useState } from 'react';

const initialFormData = {
	Name: '',
	Email: '',
	JobTitle: '',
	Age: 0,
	CV: '',
};

interface InputEmployeeState {
	Name: string;
	Email: string;
	JobTitle: string;
	Age: number;
	CV: string;
}

export function useEmployeeForm() {
	const [formData, setFormData] = useState<InputEmployeeState>(initialFormData);

	const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return {
		formData,
		handleChangeForm,
	};
}
