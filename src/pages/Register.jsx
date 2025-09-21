import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";
import logo from "../assets/img/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStatus("");
    try {
      const res = await registerUser(formData);
      if (res.status === "success") {
        setMessage(res.message);
        setStatus("success");
        setTimeout(() => {navigate("/login")}, 2000)
      } else {
        // Si la respuesta no es de éxito, se considera un error
        setMessage(res.message || "Error de registro. Intente de nuevo.");
        setStatus("denied");
      }
    } catch (error) {
      console.log(error)
      setMessage("Error de Registro. Intente de nuevo")
      console.log(message)
      console.log(status)
      setStatus("denied")
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

        {message && (
          <p style={{ color: status === "success" ? "green" : "red", marginTop: "1rem" }}>
            {message}
          </p>
        )}
        <hr />
        <p>Already have an account? <Link to="/login">Log in.</Link></p>
      </section>
    </div>
  );
};

export default Register;