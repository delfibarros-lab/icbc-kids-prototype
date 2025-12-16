import { useNavigate } from "react-router-dom";

export default function ParentControls() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Controles parentales</div>
      </div>

      <div className="small-muted" style={{ marginBottom: 12 }}>
        Configurá cómo tu hijo usa su cuenta.
      </div>

      <div className="list">
        <div
          className="list-item"
          onClick={() => navigate("/parent/limits")}
          style={{ cursor: "pointer" }}
        >
          <span className="list-item-title">Límites de gasto</span>
          <span>›</span>
        </div>
        <div className="list-item">
          <span className="list-item-title">Horarios permitidos</span>
          <span>›</span>
        </div>
        <div className="list-item">
          <span className="list-item-title">
            Categorías permitidas / restringidas
          </span>
          <span>›</span>
        </div>
        <div
          className="list-item"
          onClick={() => navigate("/parent/block")}
          style={{ cursor: "pointer" }}
        >
          <span className="list-item-title">Bloqueo temporal de cuenta</span>
          <span>›</span>
        </div>
      </div>
    </div>
  );
}
