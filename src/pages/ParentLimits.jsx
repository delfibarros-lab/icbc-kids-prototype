import { useNavigate } from "react-router-dom";

export default function ParentLimits() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
      <div className="screen-title">Límites diarios y mensuales</div>
      </div>

      <div className="card">
        <div className="toggle-row">
          <div className="list-item-col">
            <span className="list-item-title">Límite diario</span>
            <span className="list-item-sub">Monto en pesos</span>
          </div>
          <div className="fake-toggle">
            <div className="fake-toggle-thumb" />
          </div>
        </div>
        <input className="input" defaultValue="$1.500" />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="toggle-row">
          <div className="list-item-col">
            <span className="list-item-title">Límite mensual</span>
            <span className="list-item-sub">Monto en pesos</span>
          </div>
          <div className="fake-toggle">
            <div className="fake-toggle-thumb" />
          </div>
        </div>
        <input className="input" defaultValue="$0" />
      </div>

      <div className="small-muted" style={{ marginTop: 10 }}>
        Estos límites se aplican a compras y transferencias del menor.
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 18 }}
        onClick={() => alert("Cambios guardados (simulado)")}
      >
        Guardar cambios
      </button>

      <div
        className="link-text"
        style={{ marginTop: 10 }}
        onClick={() => alert("Valores restablecidos (simulado)")}
      >
        Restablecer valores
      </div>
    </div>
  );
}
