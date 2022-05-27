import Login from "./Login"
import { Routes, Route, Link, Outlet } from "react-router-dom";


const LoginContainer = () => {
    return(
        <>
        <h1>Sign Up or Log In!</h1>
        <Link to="signup">Sign Up</Link>
        <Link to="login">Login</Link>
        <Outlet />
        </>
    )
}

export default LoginContainer;