import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedUserRoute = ({ children }) => {
  const { role } = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  if (role !== "user") {
    navigate("/", { replace: true });
    return null; // or any other placeholder
  }

  return children;
};

export default ProtectedUserRoute;
