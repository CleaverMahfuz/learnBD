import { useContext } from 'react';
import UserContext from './UserContext';

const useLogin = (userResponse) => {
	const { setUser } = useContext(UserContext);
	setUser({ ...userResponse });
};

export default useLogin;
