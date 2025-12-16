import { useNavigate } from "react-router-dom";

export default function ConfirmPurchase() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Confirmar compra</div>
      </div>

      <div className="card">
        <div className="list-item-col" style={{ alignItems: "center" }}>
          <div className="list-item-sub">Monto a pagar</div>
          <div className="amount-big" style={{ marginTop: 4 }}>
            $150,00
          </div>
        </div>

        <div className="section-title" style={{ marginTop: 14 }}>
          Detalles
        </div>
        <div className="list-item-col">
          <span className="list-item-sub">Comercio</span>
          <span className="list-item-title">Gamestop</span>
        </div>
        <div className="list-item-col" style={{ marginTop: 8 }}>
          <span className="list-item-sub">Fecha y hora</span>
          <span className="list-item-title">12 de Agosto, 14:30</span>
        </div>
        <div className="list-item-col" style={{ marginTop: 8 }}>
          <span className="list-item-sub">Tarjeta</span>
          <span className="list-item-title">**** 1234</span>
        </div>

        <div
          className="card"
          style={{
            marginTop: 14,
            background: "#e5f7e9",
            borderColor: "#d0ebd6",
          }}
        >
          <span className="list-item-sub">Dentro del límite diario</span>
        </div>
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 20 }}
        onClick={() => {
          alert("Compra confirmada (simulada)");
          navigate("/parent/account");
        }}
      >
        Confirmar compra
      </button>

      <div
        className="link-text"
        style={{ marginTop: 16 }}
        onClick={() => navigate(-1)}
      >
        Cancelar
      </div>
    </div>
  );
}
