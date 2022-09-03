import Button from 'Components/shared/Button';
import {
	ContentBody,
	ContentBox,
	ContentHeader,
	ContentTitle,
	ContentValue,
	ContentItem,
	DualContentItem,
	ContentItemValue,
	ContentItemTitle,
} from 'Components/shared/ContentBox';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './PaymentPool.scss';

class PaymentPool extends Component {
	constructor() {
		super();

		this.state = {
			loaded: false,
		};
	}

	componentDidMount() {
		this.setState({
			payment: {
				title: 'The Junction',
				totalPayment: 162,
				recievedPayment: 139,
				payments: [
					{
						user: 'John Doe',
						payment: 68,
						primaryUser: true,
					},
					{
						user: 'Mark Zuckerberg',
						payment: 33,
					},
					{
						user: 'George Stein',
						payment: 18,
					},
					{
						user: 'Bill Gates',
						payment: 20,
					},
				],
			},
		});
	}

	render() {
		const payment = this.state.payment;

		return (
			<div className="payment-pool">
				{payment && (
					<>
						<ContentBox>
							<ContentHeader>
								<ContentTitle title={payment.title} />
								<ContentValue
									value={`$${payment.totalPayment}`}
									compareValue={`$${payment.recievedPayment}`}
								/>
							</ContentHeader>
							<ContentBody limitSizeLarge>
								{payment.payments.map((payment, index) => {
									return (
										<ContentItem key={index}>
											<div className="payment-pool-payment-information">
												<ContentItemTitle
													title={payment.user}
												/>
												<ContentItemValue
													value={`$${payment.payment}`}
													className="payment-pool-payment"
												/>
											</div>
											<DualContentItem halfSize={false}>
												<Button label="Remove" error />
												<Button label="Request" theme />
											</DualContentItem>
										</ContentItem>
									);
								})}
							</ContentBody>
						</ContentBox>
						<div className="qrcode-container">
							<QRCode
								className="qrcode"
								value={`${window.location.host}/join-payment-pool/${payment.id}`}
							/>
						</div>
					</>
				)}
			</div>
		);
	}
}

function PaymentPoolWrapper() {
	const { poolId } = useParams();

	return <PaymentPool poolId={poolId} />;
}

export default PaymentPoolWrapper;
