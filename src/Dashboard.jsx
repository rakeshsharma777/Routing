import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
}

export {Dashboard};
