import React, { useContext, useEffect, useState } from 'react';
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
import { home, signUp, resetPassword } from '../../fixedRoutes';
import UserContext from '../../config/UserContext';
import AlertContext from '../../config/AlertContext';
import { encrypt } from '../../config/myCrypt';
import axiosInstance from '../../config/axiosInstance';

export default function LogIn() {
	const classes = useStyles();
	const history = useHistory();

	const { user } = useContext(UserContext);
	if (user.userName) {
		history.push(`${home}`);
	}

	const { alertMessage, setAlertMessage, setAlertSeverity } = useContext(AlertContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const [isValidating, setIsValidating] = useState(false);
	const [isValidated, setIsValidated] = useState(false);

	useEffect(() => {
		if (email && password) {
			setIsValidating(true);
		}

		if (isValidating) {
			if (!isEmail(email)) setEmailError('Invalid email');
			else setEmailError('');

			if (!isStrongPassword(password)) setPasswordError('Too weak');
			else setPasswordError('');

			if (!emailError && !passwordError) {
				setIsValidated(true);
			} else {
				setIsValidated(false);
			}
		}
	}, [isValidating, email, password, emailError, passwordError]);

	const handleLogin = async (event) => {
		event.preventDefault();

		setIsValidating(true);

		if (isValidated) {
			setAlertSeverity('info');
			setAlertMessage('Loading...');

			const config = {
				method: 'post',
				url: '/users/login',
				headers: { 'Content-Type': 'application/json' },
				data: JSON.stringify({ email, password }),
			};

			axiosInstance(config)
				.then(function (response) {
					encrypt(response.data.token);
					setAlertSeverity('success');
					setAlertMessage('Login successful, reloading...');
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
				<title>{`Log in - ELearnBD`}</title>
			</Helmet>
			<form>
				<TextField
					onChange={(event) => setEmail(event.target.value)}
					helperText={emailError}
					error={Boolean(emailError)}
					label='Email'
					type='email'
					name='login-email'
					id='login-email'
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
					name='login-password'
					id='login-password'
					required
					variant='outlined'
					margin='dense'
					fullWidth
					className={classes.marginBottom}
				/>

				<Button
					onClick={(event) => handleLogin(event)}
					disabled={alertMessage === 'Loading...'}
					variant='contained'
					color='primary'
					fullWidth
					type='submit'
					className={classes.marginBottom}>
					Log In
				</Button>
			</form>

			<Button
				component={Link}
				to={resetPassword}
				variant='text'
				size='small'
				color='primary'
				fullWidth
				style={{ textTransform: 'none' }}>
				Forgot password
			</Button>

			<Button
				component={Link}
				to={signUp}
				variant='text'
				size='small'
				color='primary'
				fullWidth
				style={{ marginTop: '4px', textTransform: 'none' }}>
				I do not have an account
			</Button>
		</React.Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	marginBottom: { margin: theme.spacing(0, 0, 2, 0) },
}));
