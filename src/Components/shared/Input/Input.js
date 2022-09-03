import './Input.scss';

function Input({
	label,
	placeholder,
	type,
	className,
	onChange,
	value,
	error,
	success,
	primary,
	theme,
	info,
	disabled,
	...rest
}) {
	let id = Math.random() * 100000;

	return (
		<div
			className={`input-container input-${
				error
					? 'error'
					: success
					? 'success'
					: theme
					? 'theme'
					: info
					? 'info'
					: disabled
					? 'disabled'
					: 'primary'
			}`}>
			<input
				id={id}
				className={`input ${className} ${
					type === 'money' && 'input-money'
				} input-${
					error
						? 'error'
						: success
						? 'success'
						: theme
						? 'theme'
						: info
						? 'info'
						: disabled
						? 'disabled'
						: 'primary'
				}`}
				placeholder={type === 'money' ? `$${placeholder}` : placeholder}
				onKeyDown={(e) => {
					if (disabled) {
						e.preventDefault();
					}
				}}
				onChange={(e) => {
					if (disabled) {
						return;
					}

					let value = e.target.value;
					let changeValue;

					if (type === 'money') {
						e.target.value = `$${value.replace('$', '')}`;
						changeValue = value.substring(1);
					}

					if (onChange) {
						onChange(changeValue);
					}
				}}
				{...rest}
			/>
			<label htmlFor={id} className="input-label">
				{label}
			</label>
		</div>
	);
}

export default Input;
