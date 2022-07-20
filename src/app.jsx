import "./app.css";
import { useAuth } from "./hooks/useAuth";
// import { Navigate } from "react-router-dom";

import { PrivateApp } from "./private-app";
import { PublicApp } from "./public-app";

function App() {
  const [token] = useAuth();
  console.log(token);

  if (token) {
    return <PrivateApp />;
  }
  return <PublicApp />;
}

export default App;
