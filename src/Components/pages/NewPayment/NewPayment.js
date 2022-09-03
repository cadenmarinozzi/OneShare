import Button from 'Components/shared/Button';
import {
	ContentBody,
	ContentBox,
	ContentHeader,
	ContentTitle,
	DualContentItem,
} from 'Components/shared/ContentBox';
import Input from 'Components/shared/Input';
import './NewPayment.scss';

function newPayment() {
	function handleCreatePayment(paymentId) {
		window.location.href = `/payment-pool`;
	}

	return (
		<div className="new-payment">
			<ContentBox>
				<ContentHeader>
					<ContentTitle title="New Payment" />
				</ContentHeader>
				<ContentBody>
					<Input label="Title" placeholder="Downtown Pizza" theme />
					<Input
						label="Amount"
						type="money"
						placeholder={100}
						theme
					/>
					<DualContentItem>
						<Button
							label="Create"
							success
							onClick={handleCreatePayment}
						/>
						<Button label="Cancel" error />
					</DualContentItem>
				</ContentBody>
			</ContentBox>
		</div>
	);
}

export default newPayment;
