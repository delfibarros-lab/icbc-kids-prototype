import { useNavigate } from "react-router-dom";

export default function MinorNewTransfer() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Nueva transferencia</div>
      </div>

      <div className="input-group">
        <div className="label">Destinatario</div>
        <input className="input" placeholder="Buscá por nombre" />
      </div>

      <div className="input-group">
        <div className="label">CBU / Alias</div>
        <input className="input" placeholder="Ingresá el CBU o Alias" />
      </div>

      <div className="input-group">
        <div className="label">Monto</div>
        <input className="input" placeholder="$ 0,00" />
      </div>

      <div style={{ marginTop: 10, marginBottom: 20 }}>
        <div className="label">Desde</div>
        <div className="card">
          <div className="list-item-col">
            <span className="list-item-title">Cuenta del menor</span>
            <span className="list-item-sub">
              Saldo disponible: $1.250,50
            </span>
          </div>
        </div>
      </div>

      <button
        className="primary-button"
        onClick={() => alert("Transferencia simulada")}
      >
        Confirmar transferencia
      </button>

      <div
        className="link-text"
        style={{ marginTop: 18 }}
        onClick={() => navigate("/minor/home")}
      >
        Cancelar
      </div>
    </div>
  );
}
