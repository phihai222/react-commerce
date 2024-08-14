import { Link, Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <>
      <h1>AuthenticationLayout</h1>
      {/*TODO Make a authentication layout*/}
      <li><Link to="/">Login</Link></li>
      <li><Link to="/forgot-password">Forgot Password</Link></li>
      <li><Link to="/notfound">Not Found</Link></li>
      <Outlet />
    </>
  );
};

export default AuthenticationLayout;
