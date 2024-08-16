import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthenticationRouter from "./routes/authenticationRouter/index.jsx";

function App() {

  return (
    <RouterProvider router={AuthenticationRouter} />
  );
}

export default App;
