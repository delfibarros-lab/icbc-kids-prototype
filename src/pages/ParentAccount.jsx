import { useNavigate } from "react-router-dom";

export default function ParentAccount() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="screen-title">Cuenta del menor</div>
      </div>

      <div className="card">
        <div className="small-muted">Hola, Sofía</div>
        <div className="amount-big">$1.250,50</div>
        <div className="small-muted">Saldo actual</div>
      </div>

      <div className="section-title">Movimientos</div>
      <div className="list">
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Compra en "GameStore"</span>
            <span className="list-item-sub">Hoy, 14:30</span>
          </div>
          <span className="amount-negative">- $250,00</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Almuerzo en "QuickBites"</span>
            <span className="list-item-sub">Ayer, 13:05</span>
          </div>
          <span className="amount-negative">- $85,50</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Abono semanal de Papá</span>
            <span className="list-item-sub">03/11, 09:00</span>
          </div>
          <span className="amount-positive">+ $500,00</span>
        </div>
      </div>

      <button
        className="secondary-button"
        onClick={() => navigate("/parent/controls")}
      >
        Controles parentales
      </button>

      <button
        className="secondary-button"
        onClick={() => navigate("/parent/reports")}
      >
        Reportes y resumen de gastos
      </button>

      <button
        className="secondary-button"
        onClick={() => navigate("/parent/approve")}
      >
        Aprobar operaciones pendientes
      </button>
    </div>
  );
}
