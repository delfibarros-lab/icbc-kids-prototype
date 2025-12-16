import { useNavigate } from "react-router-dom";

export default function RegisterMinor() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Registrar menor</div>
      </div>

      <div className="input-group">
        <div className="label">Nombre del menor</div>
        <input className="input" placeholder="Ingresá el nombre" />
      </div>
      <div className="input-group">
        <div className="label">Apellido del menor</div>
        <input className="input" placeholder="Ingresá el apellido" />
      </div>
      <div className="input-group">
        <div className="label">Fecha de nacimiento</div>
        <input className="input" placeholder="Seleccioná la fecha" />
      </div>

      <div className="section-title">Documentación</div>
      <div className="list">
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">DNI frente</span>
            <span className="list-item-sub">Pendiente</span>
          </div>
          <span>📷</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">DNI dorso</span>
            <span className="list-item-sub">Pendiente</span>
          </div>
          <span>📷</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Partida de nacimiento</span>
            <span className="list-item-sub">Cargado</span>
          </div>
          <span>✓</span>
        </div>
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 18 }}
        onClick={() => navigate("/parent/account")}
      >
        Continuar
      </button>

      <div
        className="link-text"
        style={{ marginTop: 12 }}
        onClick={() => navigate("/")}
      >
        Cancelar
      </div>
    </div>
  );
}
