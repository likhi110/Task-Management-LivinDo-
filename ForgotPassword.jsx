import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmail() {
      try {
        const res = await API.get(`/auth/reset-password-info/${token}`);
        console.log("Reset password info:", res.data);
        if (res.data.email) {
          setEmail(res.data.email);
        } else {
          alert("Invalid reset link.");
          navigate("/forgot-password");
        }
      } catch (err) {
        console.error(err);
        alert("Invalid or expired reset link.");
        navigate("/forgot-password");
      } finally {
        setLoading(false);
      }
    }

    if (token) fetchEmail();
  }, [token, navigate]);

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      alert("Password successfully reset. Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        padding: "30px 20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/Montserrt.png"
        alt="Task Management Logo"
        style={{ width: "120px", height: "auto", marginBottom: "20px" }}
      />

      <h2 style={{ marginBottom: "10px", color: "#333" }}>Reset Password</h2>

      {loading ? (
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Loading reset info...
        </p>
      ) : (
        <h3
          style={{
            fontSize: "20px",
            color: "#4CAF50",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Resetting password for: <br />
          <span style={{ fontSize: "18px", color: "#333" }}>{email}</span>
        </h3>
      )}

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleReset}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Reset Password
      </button>
    </div>
  );
}
