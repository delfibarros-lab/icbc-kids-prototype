import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="logo-box">
        <div className="logo-placeholder">ICBC</div>
      </div>
      <h1>ICBC Kids</h1>

      <div className="input-group">
        <div className="label">Usuario</div>
        <input className="input" placeholder="Usuario" />
      </div>

      <div className="input-group">
        <div className="label">Contraseña</div>
        <input className="input" placeholder="Contraseña" type="password" />
      </div>

      <div style={{ textAlign: "center", marginBottom: 18, marginTop: 6 }}>
        <div className="small-muted">Iniciar sesión con biometría</div>
      </div>

      <button
        className="primary-button"
        onClick={() => navigate("/minor/home")}
      >
        Ingresar como menor
      </button>

      <button
        className="secondary-button"
        onClick={() => navigate("/parent/account")}
      >
        Ingresar como adulto
      </button>

      <div className="link-text">Olvidé mi contraseña</div>
      <div
        className="small-muted"
        style={{ textAlign: "center", marginTop: 4 }}
      >
        Ayuda
      </div>

      <div
        className="link-text"
        style={{ marginTop: 18 }}
        onClick={() => navigate("/crear-cuenta-familiar")}
      >
        Crear cuenta familiar
      </div>
    </div>
  );
}
