import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/teen.webp";
import bg from "../assets/images/bg.jpg";

function Login({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const users = {
    robin: "robinpw",
    starfire: "starfirepw",
    raven: "ravenpw",
    beastboy: "beastboypw",
    cyborg: "cyborgpw"
  };

  useEffect(() => {
    if (username) {
      setTitle(`Hello, ${username}`);
    } else {
      setTitle("");
    }
  }, [username]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (users[username] && users[username] === password) {
      setLoggedInUser(username);
      navigate("/home");
    } else {
      alert("Login Error");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "15px" }}
      >
        <img src={logo} style={{ width: "300px" }} alt="Teen Titans Logo" />
        <h1
          className="text-center mb-3"
          style={{ color: "#ffffffff", fontWeight: "bold" }}
        >
          Login
        </h1>
        {title && <h5 className="text-center mb-3" style={{ color: "#42cb45" }}>{title}</h5>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label style={{ color: "#62479e", fontWeight: "bold" }}>
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              style={{ borderColor: "#62479e" }}
              value={username}
              required
              maxLength={20}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group mb-4">
            <label style={{ color: "#f19e20", fontWeight: "bold" }}>
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              style={{ borderColor: "#f19e20" }}
              value={password}
              required
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#42cb45",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
