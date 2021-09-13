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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value).then(
        setLoading(false)
      );
      history.push("/dashboard");
    } catch {
      setError("Impossible de se connecter");
    }
  }
  return (
    <div>
      <h2 className="titre_second">Connexion</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <section id="email">
          <label>Email</label>
          <input type="email" placeholder="Email" ref={emailRef} required />
        </section>
        <section id="password">
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="password"
            ref={passwordRef}
            required
          />
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
