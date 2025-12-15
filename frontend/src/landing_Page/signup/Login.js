import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_BASE = "https://stokro-backend.onrender.com";

    try {
      const res = await fetch(`${API_BASE}/login_manually`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }


      alert("Login successful");

      // save token
      localStorage.setItem("token", data.token);

      // redirect to homepage (localhost:3001/)
      navigate("https://stokro-dashboard.onrender.com");

    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh"}}
    >
      <div className="card shadow-sm p-4" style={{ maxWidth: "420px", width: "100%" }}>
        
        {/* Heading */}
        <h3 className="text-center mb-3">Welcome back</h3>
        <p className="text-center text-muted mb-4">
          Login to your account
        </p>

        {/* Google Login (future-ready) */}
        <button
          className="btn btn-outline-dark w-100 mb-3 d-flex align-items-center justify-content-center"
          style={{ gap: "8px" }}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width="18"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="text-center text-muted mb-3">
          <small>or</small>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
