import { useState, useContext  } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/img/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    if (res && res.token) {
      login(res.token);
      navigate("/");
    } else {
      setError("Credenciales inválidas o error de conexión.");
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <section className="login">
        <img className="login__logo" src={logo} alt="DevTo Logo" />
        <h1>Welcome back!</h1>
        <p>Login to continue exploring posts</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary__btn">Log in</button>
        </form>

        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

        <hr />
        <p>Don’t have an account? <Link to="/register">Sign up.</Link></p>
      </section>
    </div>
  );
};

export default Login;