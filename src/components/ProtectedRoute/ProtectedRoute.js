import CurrentUserContext from "contexts/CurrentUserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(CurrentUserContext);

	return currentUser ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
