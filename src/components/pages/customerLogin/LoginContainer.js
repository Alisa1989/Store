import { Link, Outlet } from "react-router-dom";

const LoginContainer = () => {
  return (
    <>
      <div className="login-main">
        <h1>Sign Up or Log In!</h1>
        <Link className="login-container-links btn btn-lightblue" to="signup">
          Sign Up
        </Link>
        <Link className="login-container-links btn btn-lightblue" to="login">
          Login
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default LoginContainer;
