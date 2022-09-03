import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
	apiKey: 'AIzaSyArjEjNSE6Rt7pzfrA9nYa6JNdoz1_LIio',
	authDomain: 'oneshare-e4138.firebaseapp.com',
	projectId: 'oneshare-e4138',
	storageBucket: 'oneshare-e4138.appspot.com',
	messagingSenderId: '286020948247',
	appId: '1:286020948247:web:076637207a35338f94e752',
	measurementId: 'G-80THQMDTLG',
};

/*
 emails {
    <email>: { 
        <userId>
    }
 }

 users {
    <userId>: { 
        name: <name>, 
        email: <email>, 
        password: <password>,
        paymentPools: {
            <paymentPoolId>
        }
    }
 }

 paymentPools {
    <paymentPoolId>: {
        <title>
        <totalPayment>
        poolOwner: <userId>
        payments: {
            <paymentId>
        }
    }
 }

 payments {
    <paymentId>: {
        <userId>
        <amount>
    }
*/

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUserData({ userId, email }) {
	const userRef = doc(db, 'users', userId);
	const docSnap = await getDoc(userRef);

	if (!docSnap.exists()) return;

	return docSnap.data();
}

async function login({ email, userId, password }) {
	const userData = await getUserData({ userId });

	if (!userData) return false;

	return userData.password === password;
}

async function signUp({ name, email, password }) {
	const userId = uuid();

	const userRef = doc(db, 'users', userId);
	const emailRef = doc(db, 'emails', email);

	const userDocSnap = await getDoc(userRef);

	if (userDocSnap.exists()) return;

	await setDoc(userRef, {
		name,
		email,
		password,
	});

	await setDoc(emailRef, {
		userId,
	});

	return userId;
}

export { login, signUp, getUserData };
