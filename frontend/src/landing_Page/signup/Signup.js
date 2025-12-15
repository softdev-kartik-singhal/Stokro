import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-sm p-4" style={{ maxWidth: "420px", width: "100%" }}>
        
        {/* Heading */}
        <h3 className="text-center mb-3">Create your account</h3>
        <p className="text-center text-muted mb-4">
          Choose how you want to sign up
        </p>

        {/* Google Signup */}
        <button
          className="btn btn-outline-dark w-100 mb-3 d-flex align-items-center justify-content-center"
          style={{ gap: "8px" }}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width="18"
          />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="text-center text-muted mb-3">
          <small>or</small>
        </div>

        {/* Manual Signup */}
        <Link to="/signup_manually" className="btn btn-primary w-100 mb-3">
          Create Account with Email
        </Link>

        {/* Login Link */}
        <p className="text-center mb-0">
          Already have an account?{" "}
          <Link to="/login_manually" className="text-decoration-none">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
