import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Impossible de se connecter");
    }
    setLoading(false);
  }
  return (
    <div>
      <h2 className="titre_second">Connexion</h2>
      {error && <alert variant="danger">{error}</alert>}
      <form onSubmit={handleSubmit}>
        <section id="email">
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </section>
        <section id="password">
          <label>Mot de passe</label>
          <input type="password" ref={passwordRef} required />
        </section>
        <button disabled={loading} className="connect-button" type="submit">
          Connexion
        </button>
      </form>
      <div className="forgot">
        <Link to="/forgot-password">Oubli du mot de passe </Link>
      </div>
    </div>
  );
}
