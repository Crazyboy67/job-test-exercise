import { ChangeEvent, useState } from 'react';

const initialFormData = {
	Name: '',
	Email: '',
	JobTitle: '',
	Age: 0,
	CV: '',
	FileName: '',
};

interface InputEmployeeState {
	Name: string;
	Email: string;
	JobTitle: string;
	Age: number;
	CV: string;
	FileName: string;
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
		if (e.target.type !== 'file') {
			setFormData((prevFormData) => {
				const updatedFormData = [...prevFormData];
				updatedFormData[index] = { ...updatedFormData[index], [name]: value };
				return updatedFormData;
			});
		} else {
			const file = e.target.files?.[0];
			if (file) {
				const url = URL.createObjectURL(file);
				setFormData((prevFormData) => {
					const updatedFormData = [...prevFormData];
					updatedFormData[index] = {
						...updatedFormData[index],
						[name]: url,
						FileName: file.name,
					};
					return updatedFormData;
				});
			}
		}
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
