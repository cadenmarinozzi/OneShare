import {
	ContentBody,
	ContentBox,
	ContentHeader,
	ContentTitle,
} from 'Components/shared/ContentBox';
import './Login.scss';

function Login() {
	return (
		<div className="login">
			<ContentBox>
				<ContentHeader>
					<ContentTitle>Login</ContentTitle>
				</ContentHeader>
				<ContentBody></ContentBody>
			</ContentBox>
		</div>
	);
}

export default Login;
