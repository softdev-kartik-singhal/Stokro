import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
];

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      username,
      address,
      city,
      state,
      zip,
    };

    const PORT = process.env.PORT || 3002;

    try {
      const res = await fetch(`https://stokro-backend.onrender.com/signup_manually`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const data = await res.json();

      if (!res.ok) {
        console.log("Signup response:", data);
        alert(data.message);

        return;
      }

      // save token
      localStorage.setItem("token", data.token);

      // redirect to homepage (localhost:3001/)
      navigate("https://stokro-dashboard.onrender.com");

      alert("Signup successful!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
    setEmail("");
    setPassword("");
    setUsername("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");

  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      {/* Row 1 */}
      <div className="row mb-3">
        <div className="col-md-4 offset-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row mb-3">
        <div className="col-md-3 offset-2">
          <label className="form-label">Username</label>
          <input
            type="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="col-5">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="row mb-3">
        <div className="col-md-3 offset-2">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">State</label>
          <select
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Choose...</option>
            {statesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="row mb-4">
        <div className="col-2 offset-2 ">
          <div className="form-check">
            <input
              id="checkbox"
              style={{ cursor: "pointer" }}
              className="form-check-input"
              type="checkbox"
            />
            <label
              htmlFor="checkbox"
              style={{ cursor: "pointer" }}
              className="form-check-label"
            >
              Remember me
            </label>
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
