import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "60px auto",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <img
        src="/Montserrt.png"
        alt="Task Manager Logo"
        style={{ width: "180px", height: "auto", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2rem", color: "#333" }}>Welcome to Task Manager</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", margin: "20px 0" }}>
        Organize your projects, assign tasks, and track progress in real-time.
      </p>
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/register"
          style={{
            display: "inline-block",
            backgroundColor: "#2196F3",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            marginRight: "15px",
          }}
        >
          Get Started
        </Link>
        <Link
          to="/login"
          style={{
            display: "inline-block",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
