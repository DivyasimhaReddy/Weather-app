import React, { useState } from "react";
import { signInWithGoogle } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Google({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ← ✅ Step 1

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithGoogle();
      onLogin(result.user); // pass user info up

      // ✅ Step 2: Navigate to weather page
      navigate("/weather");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login with Google"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
