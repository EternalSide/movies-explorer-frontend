import CurrentUserContext from "contexts/CurrentUserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
	const { currentUser } = useContext(CurrentUserContext);

	return currentUser ? <Navigate to='/' /> : children;
};

export default AuthRoute;
