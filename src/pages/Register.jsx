import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";
import logo from "../assets/img/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
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
    const res = await registerUser(formData);
    if (res && res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      setError("Error al registrar. Intenta nuevamente.");
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <section className="login">
          <img className="login__logo" src={logo} alt="DevTo Logo" />
          <h1>Join the DEV Community</h1>
          <p>
            DEV Community is a community of 3,157,187 amazing developers
          </p>
          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

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

            <button type="submit" className="primary__btn">Create account</button>
          </form>

          {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

          <hr />
          <p>Already have an account? <Link to="/login">Log in.</Link></p>
      </section>
    </div>
  );
};

export default Register;