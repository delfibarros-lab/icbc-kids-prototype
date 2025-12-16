import { useNavigate } from "react-router-dom";

export default function ParentApproveOperations() {
  const navigate = useNavigate();

  const approveAndGo = () => {
    navigate("/parent/confirm-purchase");
  };

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Aprobar operaciones del menor</div>
      </div>

      <div className="list">
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Amazon</span>
            <span className="list-item-sub">Pendiente · Hoy, 14:32 hs</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button className="small-button secondary">Rechazar</button>
            <button className="small-button primary" onClick={approveAndGo}>
              Aprobar
            </button>
          </div>
        </div>

        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Cinepolis</span>
            <span className="list-item-sub">Pendiente · Ayer, 18:05 hs</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button className="small-button secondary">Rechazar</button>
            <button
              className="small-button primary"
              onClick={() => alert("Compra aprobada (simulada)")}
            >
              Aprobar
            </button>
          </div>
        </div>

        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Starbucks</span>
            <span className="list-item-sub">
              Pendiente · 23/05/2024, 09:15 hs
            </span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button className="small-button secondary">Rechazar</button>
            <button
              className="small-button primary"
              onClick={() => alert("Compra aprobada (simulada)")}
            >
              Aprobar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
