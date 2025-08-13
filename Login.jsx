import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/tasks");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "10px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <img
          src="/Montserrt.png"
          alt="Task Management Logo"
          style={{
            width: "80px",
            height: "auto",
            marginBottom: "20px"
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 5px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />

        {/* Forgot password link */}
        <div style={{
          textAlign: "right",
          marginBottom: "15px"
        }}>
          <Link to="/forgot-password" style={{
            fontSize: "13px",
            color: "#007bff",
            textDecoration: "none"
          }}>
            Forgot password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Login
        </button>

        <p style={{
          marginTop: "15px",
          fontSize: "14px"
        }}>
          New user?{" "}
          <Link to="/register" style={{
            color: "#007bff",
            textDecoration: "none"
          }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
