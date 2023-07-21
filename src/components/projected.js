import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restofProps }) => {
    const isAuthenticated = localStorage.getItem("islogin");
    return (
        <Route
            {...restofProps}
            render={() =>
                isAuthenticated ? <Component /> : <Redirect to="/signin" />
            }
        />
    );
};

export default ProtectedRoute;
