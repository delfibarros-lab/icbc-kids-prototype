import { useNavigate } from "react-router-dom";

export default function MinorHome() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Cuenta del menor</div>
      </div>

      <div className="card">
        <div className="small-muted">Hola, Sofía</div>
        <div className="amount-big">$1.250,50</div>
        <div className="small-muted">Tu saldo actual</div>
      </div>

      <div className="section-title">Movimientos</div>
      <div className="list">
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Compra en Juguetería</span>
            <span className="list-item-sub">15 de Julio</span>
          </div>
          <span className="amount-negative">- $250,00</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Dinero de la abuela</span>
            <span className="list-item-sub">14 de Julio</span>
          </div>
          <span className="amount-positive">+ $500,00</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Ahorro semanal</span>
            <span className="list-item-sub">12 de Julio</span>
          </div>
          <span className="amount-positive">+ $100,00</span>
        </div>
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Entradas de cine</span>
            <span className="list-item-sub">10 de Julio</span>
          </div>
          <span className="amount-negative">- $150,50</span>
        </div>
      </div>

      <button
        className="secondary-button"
        onClick={() => navigate("/minor/transfer/new")}
      >
        Nueva transferencia
      </button>

      <button
        className="secondary-button"
        onClick={() => navigate("/minor/receive")}
      >
        Recibir dinero
      </button>
    </div>
  );
}
