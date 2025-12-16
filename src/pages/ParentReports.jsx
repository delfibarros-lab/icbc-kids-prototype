import { useNavigate } from "react-router-dom";

export default function ParentReports() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Resumen de gastos del menor</div>
      </div>

      {/* Resumen lado "izquierdo" */}
      <div className="card">
        <div className="row-space-between">
          <div>
            <div className="small-muted">Total gastado este mes</div>
            <div className="amount-big">$1.250,00</div>
          </div>
          <div className="small-muted">+5% vs. mes anterior</div>
        </div>

        <div className="section-title" style={{ marginTop: 16 }}>
          Gastos por categoría
        </div>

        <div className="bar-row">
          <span className="small-muted">Juegos · $650 · 52%</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: "52%" }} />
          </div>
        </div>

        <div className="bar-row">
          <span className="small-muted">Comida · $300 · 24%</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: "24%" }} />
          </div>
        </div>

        <div className="bar-row">
          <span className="small-muted">Transporte · $200 · 16%</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: "16%" }} />
          </div>
        </div>

        <div className="bar-row">
          <span className="small-muted">Otros · $100 · 8%</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: "8%" }} />
          </div>
        </div>

        <div className="pill-switch">
          <button className="active">Última semana</button>
          <button>Último mes</button>
        </div>
      </div>

      {/* "Exportar reporte" */}
      <div className="card" style={{ marginTop: 18 }}>
        <div className="list-item-col">
          <span className="list-item-title">Reporte listo</span>
          <span className="list-item-sub">
            Movimientos del 01/01 al 31/01
          </span>
        </div>

        <button
          className="secondary-button"
          style={{ marginTop: 14 }}
          onClick={() => alert("Exportar PDF (simulado)")}
        >
          Exportar como PDF
        </button>

        <button
          className="secondary-button"
          onClick={() => alert("Exportar Excel (simulado)")}
        >
          Exportar como Excel
        </button>

        <div
          className="link-text"
          style={{ marginTop: 10 }}
          onClick={() => navigate(-1)}
        >
          Volver al reporte
        </div>
      </div>
    </div>
  );
}
