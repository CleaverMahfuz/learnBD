import React, { useContext, useEffect, useState } from 'react';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
//Material UI core
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//React router
import { Link, useHistory } from 'react-router-dom';
//React helmet
import { Helmet } from 'react-helmet';
//Fixed Routes
import { home, logIn } from '../../fixedRoutes';
import UserContext from '../../config/UserContext';
import AlertContext from '../../config/AlertContext';
import { encrypt } from '../../config/myCrypt';
import axiosInstance from '../../config/axiosInstance';

export default function SignUp() {
	const classes = useStyles();
	const history = useHistory();

	const { user } = useContext(UserContext);
	if (user.userName) {
		history.push(`${home}`);
	}

	const { alertMessage, setAlertMessage, setAlertSeverity } = useContext(AlertContext);

	const [fullName, setFullName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passConfirm, setPassConfirm] = useState('');

	const [fullNameError, setFullNameError] = useState('');
	const [userNameError, setUserNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [passConfirmError, setPassConfirmError] = useState('');

	const [isValidating, setIsValidating] = useState(false);
	const [isValidated, setIsValidated] = useState(false);

	useEffect(() => {
		if (fullName && userName && email && password && passConfirm) {
			setIsValidating(true);
		}

		if (isValidating) {
			if (fullName.length < 4) setFullNameError('Too short');
			else if (fullName.length > 50) setFullNameError('Too long');
			else setFullNameError('');

			if (userName.length < 3) setFullNameError('Too short');
			else if (userName.length > 30) setFullNameError('Too long');
			else if (!isAlphanumeric(userName))
				setUserNameError('English letters and numbers only');
			else setUserNameError('');

			if (!isEmail(email)) setEmailError('Invalid email');
			else setEmailError('');

			if (!isStrongPassword(password)) setPasswordError('Too weak');
			else setPasswordError('');

			if (passConfirm !== password) setPassConfirmError('Not matching');
			else setPassConfirmError('');

			if (
				!fullNameError &&
				!userNameError &&
				!emailError &&
				!passwordError &&
				!passConfirmError
			) {
				setIsValidated(true);
			} else {
				setIsValidated(false);
			}
		}
	}, [
		isValidating,
		fullName,
		userName,
		email,
		password,
		passConfirm,
		fullNameError,
		userNameError,
		emailError,
		passwordError,
		passConfirmError,
	]);

	const handleSignup = (event) => {
		event.preventDefault();

		setIsValidating(true);

		if (isValidated) {
			setAlertSeverity('info');
			setAlertMessage('Loading...');

			const data = {
				fullName: fullName,
				userName: userName,
				email: email,
				password: password,
				passwordConfirm: passConfirm,
			};

			const config = {
				method: 'post',
				url: '/users/signup',
				headers: { 'Content-Type': 'application/json' },
				data: JSON.stringify({ ...data }),
			};

			axiosInstance(config)
				.then(function (response) {
					encrypt(response.data.token);
					setAlertSeverity('success');
					setAlertMessage('Sign up successful, reloading...');
					window.location.reload();
				})
				.catch(function (error) {
					setAlertSeverity('error');
					setAlertMessage(error.response.data.message);
				});
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Sign up - ELearnBD`}</title>
			</Helmet>
			<form>
				<TextField
					onChange={(event) => setFullName(event.target.value)}
					helperText={fullNameError}
					error={Boolean(fullNameError)}
					label='Full Name'
					type='name'
					name='signup-name'
					id='signup-name'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<TextField
					onChange={(event) => setUserName(event.target.value)}
					helperText={userNameError}
					error={Boolean(userNameError)}
					label='Username'
					type='name'
					name='signup-username'
					id='signup-username'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<TextField
					onChange={(event) => setEmail(event.target.value)}
					helperText={emailError}
					error={Boolean(emailError)}
					label='Email'
					type='email'
					name='signup-email'
					id='signup-email'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<TextField
					onChange={(event) => setPassword(event.target.value)}
					helperText={passwordError}
					error={Boolean(passwordError)}
					label='Password'
					type='password'
					name='signup-password'
					id='signup-password'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<TextField
					onChange={(event) => setPassConfirm(event.target.value)}
					helperText={passConfirmError}
					error={Boolean(passConfirmError)}
					label='Confirm Password'
					type='password'
					name='signup-confirm-password'
					id='signup-confirm-password'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<Button
					onClick={(event) => handleSignup(event)}
					disabled={alertMessage === 'Loading...'}
					variant='contained'
					color='primary'
					fullWidth
					type='submit'
					className={classes.marginBottom}>
					Sign up
				</Button>
			</form>

			<Button
				component={Link}
				to={logIn}
				variant='text'
				size='small'
				color='primary'
				fullWidth
				style={{ textTransform: 'none' }}>
				I already have an account
			</Button>
		</React.Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	marginBottom: { margin: theme.spacing(0, 0, 2, 0) },
}));
