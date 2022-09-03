import './ContentBox.scss';

function ContentBox({ children }) {
	return <div className="content-box">{children}</div>;
}

function ContentHeader({ children }) {
	return <div className="content-header">{children}</div>;
}

function ContentTitle({ title, className }) {
	return <h3 className={`content-title ${className}`}>{title}</h3>;
}

function ContentValue({ value, compareValue, className }) {
	return compareValue ? (
		<div className="content-value-container">
			<h3 className={`compare-content-value ${className}`}>
				{compareValue}
			</h3>
			<h3>of</h3>
			<h3 className={`content-value ${className}`}>{value}</h3>
		</div>
	) : (
		<h3 className={`content-value ${className}`}>{value}</h3>
	);
}

function ContentBody({ children, limitSize, limitSizeLarge }) {
	return (
		<div
			className={`content-body ${
				limitSize
					? 'content-body-limit-size'
					: limitSizeLarge && 'content-body-limit-size-large'
			}`}>
			{children}
		</div>
	);
}

function ContentItemInline({ children }) {
	return <div className="content-item-inline">{children}</div>;
}

function ContentItemTitle({ title, className }) {
	return <span className={`content-item-title ${className}`}>{title}</span>;
}

function ContentItemValue({ value, className }) {
	return <span className={`content-item-value ${className}`}>{value}</span>;
}

function DualContentItem({ halfSize = true, children }) {
	return (
		<div
			className={`dual-content-item ${
				halfSize && 'half-dual-content-item'
			}`}>
			{children}
		</div>
	);
}

function ContentItem({ children }) {
	return <div className="content-item">{children}</div>;
}

export {
	ContentBox,
	ContentHeader,
	ContentTitle,
	ContentValue,
	ContentBody,
	ContentItemInline,
	ContentItemTitle,
	ContentItemValue,
	DualContentItem,
	ContentItem,
};
