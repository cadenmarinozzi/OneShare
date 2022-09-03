import './Button.scss';

function Button({
	label,
	circle,
	children,
	className,
	error,
	success,
	primary,
	theme,
	info,
	disabled,
	...rest
}) {
	return (
		<button
			className={`button button-${
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
			} ${circle && 'button-circle'} ${className}`}
			{...rest}>
			{label}
			{children}
		</button>
	);
}

export default Button;
