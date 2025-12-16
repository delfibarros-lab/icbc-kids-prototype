import { useNavigate } from "react-router-dom";

export default function ParentBlockMinor() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Bloquear cuenta del menor</div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="list-item-col">
          <span className="list-item-title">Agustina Lopez</span>
          <span className="list-item-sub">Cuenta Kids **** 1234</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="list-item-col">
          <span className="list-item-title">Bloqueo de cuenta</span>
          <span className="list-item-sub">
            Podés bloquear temporalmente esta cuenta ante actividad sospechosa.
          </span>
        </div>
      </div>

      <div className="card">
        <div className="list-item-col">
          <span className="list-item-title">Bloqueo temporal</span>
          <span className="list-item-sub">
            Activa para bloquear la cuenta y prevenir nuevas operaciones.
          </span>
        </div>
        <div style={{ marginTop: 12, marginBottom: 12 }}>
          <div className="fake-toggle">
            <div className="fake-toggle-thumb" />
          </div>
        </div>
        <div className="danger-text">
          Cuenta bloqueada: no se permiten nuevas operaciones.
        </div>
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 22 }}
        onClick={() => alert("Bloqueo simulado")}
      >
        Confirmar bloqueo
      </button>

      <div
        className="link-text"
        style={{ marginTop: 16 }}
        onClick={() => alert("Desbloqueo simulado")}
      >
        Desbloquear
      </div>
    </div>
  );
}
