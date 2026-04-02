import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignupChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        signupData,
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Signup successful!");
      setSignupData({
        fullName: "",
        email: "",
        password: "",
      });

      // Optional: auto switch to login after signup
      setTimeout(() => {
        setIsLoginMode(true);
        setMessage("");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData,
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Login successful!");

      // redirect to dashboard app
      setTimeout(() => {
        window.location.href = "http://localhost:5174";
        // 👆 Change this to your dashboard URL
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left section */}
        <div style={styles.left}>
          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="Zerodha Auth"
            style={styles.image}
          />
        </div>

        {/* Right section */}
        <div style={styles.right}>
          <h1 style={styles.heading}>
            {isLoginMode
              ? "Login to your account"
              : "Open a free demat and trading account online"}
          </h1>

          <p style={styles.subheading}>
            {isLoginMode
              ? "Access your dashboard, holdings, orders and positions securely."
              : "Start investing brokerage free and join India’s trusted trading platform."}
          </p>

          {!isLoginMode ? (
            <form onSubmit={handleSignupSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  minLength={6}
                  style={styles.input}
                />
              </div>

              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? "Creating account..." : "Sign up now"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  style={styles.input}
                />
              </div>

              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          )}

          {message && <p style={styles.success}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}

          <p style={styles.switchText}>
            {isLoginMode ? "New to Zerodha?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setMessage("");
                setError("");
              }}
              style={styles.switchButton}
            >
              {isLoginMode ? "Sign up" : "Login"}
            </button>
          </p>

          <p style={styles.footerText}>
            By proceeding, you agree to the Zerodha-style demo platform terms and
            privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    marginTop:"30px",
    paddingTop:"80px",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "420px",
    objectFit: "contain",
  },
  right: {
    maxWidth: "450px",
    width: "100%",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#222",
    marginBottom: "12px",
    lineHeight: "1.3",
  },
  subheading: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "28px",
    lineHeight: "1.6",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "14px 16px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    backgroundColor: "#387ed1",
    color: "#fff",
    border: "none",
    padding: "14px 18px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
  },
  success: {
    color: "green",
    fontSize: "0.95rem",
    marginTop: "12px",
  },
  error: {
    color: "red",
    fontSize: "0.95rem",
    marginTop: "12px",
  },
  switchText: {
    marginTop: "20px",
    fontSize: "0.95rem",
    color: "#555",
  },
  switchButton: {
    background: "none",
    border: "none",
    color: "#387ed1",
    fontWeight: "600",
    cursor: "pointer",
    padding: 0,
    fontSize: "0.95rem",
  },
  footerText: {
    marginTop: "18px",
    fontSize: "0.85rem",
    color: "#888",
    lineHeight: "1.5",
  },
};

export default Signup;