import { createHashRouter } from "react-router-dom";
import AuthenticationLayout from "../../modules/auth/layout/AuthenticationLayout.jsx";

const AuthenticationRouter = createHashRouter([
  {
    path: "/",
    element: <AuthenticationLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        index: true,
        element: <h1>Sign in</h1>
      },
      {
        path: "forgot-password",
        element: <h1>forgot-password</h1>
      }
    ]
  }
]);

export default AuthenticationRouter;