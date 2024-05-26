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

export function useEmployeeForm(initialCount: number) {
	const [formEmployeeData, setFormData] = useState<InputEmployeeState[]>(
		Array(initialCount).fill({ ...initialFormData })
	);

	const handleChangeEmployeeForm = (
		index: number,
		e: ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => {
			const updatedFormData = [...prevFormData];
			updatedFormData[index] = { ...updatedFormData[index], [name]: value };
			return updatedFormData;
		});
	};

	const setFormCount = (count: number) => {
		setFormData((prevFormData) => {
			const newFormData = [...prevFormData];
			if (count > newFormData.length) {
				for (let i = newFormData.length; i < count; i++) {
					newFormData.push({ ...initialFormData });
				}
			} else if (count < newFormData.length) {
				newFormData.length = count;
			}
			return newFormData;
		});
	};

	return {
		formEmployeeData,
		handleChangeEmployeeForm,
		setFormCount,
	};
}
