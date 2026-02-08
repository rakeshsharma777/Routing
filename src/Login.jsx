import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  console.log("Current location:", location);

  return (
    <div>
      <h2>Login Page</h2>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}

export { Login };
