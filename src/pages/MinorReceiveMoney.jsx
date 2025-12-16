import { useNavigate } from "react-router-dom";

export default function MinorReceiveMoney() {
  const navigate = useNavigate();

  const handleCopy = (label) => {
    alert(`${label} copiado (simulado)`);
  };

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Recibir dinero</div>
      </div>

      <div className="card" style={{ marginBottom: 18 }}>
        <div className="small-muted">Cuenta del menor</div>
        <div className="amount-big">$1.234,56</div>
      </div>

      <div className="list">
        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Generar código de cobro</span>
            <span className="list-item-sub">
              Para que te paguen escaneando un código
            </span>
          </div>
          <span>›</span>
        </div>

        <div className="list-item">
          <div className="list-item-col">
            <span className="list-item-title">Compartir alias/CBU</span>
            <span className="list-item-sub">
              Enviá tus datos para una transferencia
            </span>
          </div>
          <span>›</span>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="label">Alias</div>
        <div className="row-space-between">
          <span className="list-item-title">LUNA.PATO.REY</span>
          <button
            className="small-button secondary"
            onClick={() => handleCopy("Alias")}
          >
            Copiar
          </button>
        </div>

        <div className="label" style={{ marginTop: 10 }}>
          CBU
        </div>
        <div className="row-space-between">
          <span className="small-muted">
            0150987401000543219876
          </span>
          <button
            className="small-button secondary"
            onClick={() => handleCopy("CBU")}
          >
            Copiar
          </button>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14, background: "#ffe5e7" }}>
        <div className="small-muted">
          Compartí estos datos con el adulto para que pueda enviarte dinero.
        </div>
      </div>

      <div className="nav-bottom">
        <div className="nav-button nav-button-active">Inicio</div>
        <div className="nav-button">Dinero</div>
        <div className="nav-button">Tarjeta</div>
        <div className="nav-button">Más</div>
      </div>
    </div>
  );
}
