import Header from './Components/containers/Header';
import Home from './Components/pages/Home';
import PaymentPool from './Components/pages/PaymentPool';
import NewPayment from './Components/pages/NewPayment';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Body from './Components/shared/Body';
import { Component } from 'react';
import cookies from 'modules/cookies';
import { login } from 'modules/web/firebase';
import './App.scss';

class App extends Component {
	async componentDidMount() {
		const email = cookies.get('userId');
		const password = cookies.get('password');

		const loggedIn = await login({ email, userId, password });

		this.setState({
			loggedIn: loggedIn,
		});
	}

	render() {
		return this.state?.loggedIn ? (
			<BrowserRouter>
				<Header />
				<Body>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/new-payment" element={<NewPayment />} />
						<Route
							path="/payment-pool/:poolId"
							element={<PaymentPool />}
						/>
					</Routes>
				</Body>
			</BrowserRouter>
		) : (
			<Body>
				<Login />
			</Body>
		);
	}
}

export default App;
