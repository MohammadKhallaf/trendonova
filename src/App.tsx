import { Navigate } from "react-router-dom";
import { useAppSelector } from "./app/store";

import HomePage from "./pages/HomePage";
function App() {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  if (!loggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <HomePage />;
}

export default App;
