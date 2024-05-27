const MissingFieldNotification = ({ errors }: any) => {
	const title = errors.length > 0 ? 'Missing Fields' : 'Missing Field';
	const description =
		errors.length > 0
			? 'Please, fill out the following fields.'
			: 'Please, fill out the following field.';
	return (
		<div className="error_box">
			<div className="error_title">{title}</div>
			<div className="error_description">{description}</div>
			<div className="error_body">
				{errors?.map((error: string, i: number) => (
					<div className="error_missing_field" key={i}>
						{error}
					</div>
				))}
			</div>
		</div>
	);
};

export default MissingFieldNotification;
