import Button from 'Components/shared/Button';
import {
	ContentBox,
	ContentHeader,
	ContentTitle,
	ContentValue,
	ContentBody,
	ContentItemInline,
	ContentItemValue,
	ContentItemTitle,
} from 'Components/shared/ContentBox';
import { Link } from 'react-router-dom';
import './Home.scss';

let testData = [
	{
		title: 'The Junction',
		totalPayment: 162,
		payments: [
			{
				user: 'John Doe',
				payment: 62,
				primaryUser: true,
			},
			{
				user: 'Mark Zuckerberg',
				payment: 41,
			},
			{
				user: 'George Stein',
				payment: 16,
			},
			{
				user: 'Bill Gates',
				payment: 43,
			},
		],
	},
	{
		title: 'East Brothers',
		totalPayment: 480,
		payments: [
			{
				user: 'John Doe',
				payment: 221,
				primaryUser: true,
			},
			{
				user: 'Mark Zuckerberg',
				payment: 32,
			},
			{
				user: 'George Stein',
				payment: 18,
			},
			{
				user: 'Bill Gates',
				payment: 22,
			},
			{
				user: 'Muir Noir',
				payment: 36,
			},
			{
				user: 'Pak Jang',
				payment: 41,
			},
			{
				user: 'Zach Lerman',
				payment: 61,
			},
			{
				user: 'Tim Revich',
				payment: 49,
			},
		],
	},
	{
		title: 'East Brothers',
		totalPayment: 480,
		payments: [
			{
				user: 'John Doe',
				payment: 221,
				primaryUser: true,
			},
			{
				user: 'Mark Zuckerberg',
				payment: 32,
			},
			{
				user: 'George Stein',
				payment: 18,
			},
			{
				user: 'Bill Gates',
				payment: 22,
			},
			{
				user: 'Muir Noir',
				payment: 36,
			},
			{
				user: 'Pak Jang',
				payment: 41,
			},
			{
				user: 'Zach Lerman',
				payment: 61,
			},
			{
				user: 'Tim Revich',
				payment: 49,
			},
		],
	},
	{
		title: 'East Brothers',
		totalPayment: 480,
		payments: [
			{
				user: 'John Doe',
				payment: 221,
				primaryUser: true,
			},
			{
				user: 'Mark Zuckerberg',
				payment: 32,
			},
			{
				user: 'George Stein',
				payment: 18,
			},
			{
				user: 'Bill Gates',
				payment: 22,
			},
			{
				user: 'Muir Noir',
				payment: 36,
			},
			{
				user: 'Pak Jang',
				payment: 41,
			},
			{
				user: 'Zach Lerman',
				payment: 61,
			},
			{
				user: 'Tim Revich',
				payment: 49,
			},
		],
	},
	{
		title: 'East Brothers',
		totalPayment: 480,
		payments: [
			{
				user: 'John Doe',
				payment: 221,
				primaryUser: true,
			},
			{
				user: 'Mark Zuckerberg',
				payment: 32,
			},
			{
				user: 'George Stein',
				payment: 18,
			},
			{
				user: 'Bill Gates',
				payment: 22,
			},
			{
				user: 'Muir Noir',
				payment: 36,
			},
			{
				user: 'Pak Jang',
				payment: 41,
			},
			{
				user: 'Zach Lerman',
				payment: 61,
			},
			{
				user: 'Tim Revich',
				payment: 49,
			},
		],
	},
];

function Home() {
	return (
		<div className="home">
			<div className="home-content">
				{testData
					.slice(0, 3)
					.map(({ title, totalPayment, payments }, index) => {
						return (
							<ContentBox key={index}>
								<ContentHeader>
									<ContentTitle title={title} />
									<ContentValue value={`$${totalPayment}`} />
								</ContentHeader>
								<ContentBody limitSize>
									{payments.map(
										(
											{ user, payment, primaryUser },
											index
										) => {
											const paymentPercent =
												(payment / totalPayment) * 100;

											return (
												<ContentItemInline key={index}>
													<ContentItemValue
														value={`$${payment}`}
														className={
															paymentPercent > 30
																? 'payment-percent-high'
																: paymentPercent >
																  20
																? 'payment-percent-medium'
																: paymentPercent >
																  10
																? 'payment-percent-regular'
																: 'payment-percent-low'
														}
													/>
													<ContentItemTitle
														title={user}
														className={
															primaryUser &&
															'primary-user-payment'
														}
													/>
												</ContentItemInline>
											);
										}
									)}
								</ContentBody>
							</ContentBox>
						);
					})}
			</div>
			<div className="new-payment-button-container">
				<Link to="/new-payment">
					<Button className="new-payment-button" label="+" circle />
				</Link>
			</div>
		</div>
	);
}

export default Home;
