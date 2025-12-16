import { useNavigate } from "react-router-dom";

export default function CreateFamilyAccount() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="screen-title">Crear cuenta familiar</div>
      </div>

      <div className="input-group">
        <div className="label">Nombre</div>
        <input className="input" placeholder="Ingresá tu nombre" />
      </div>
      <div className="input-group">
        <div className="label">Apellido</div>
        <input className="input" placeholder="Ingresá tu apellido" />
      </div>
      <div className="input-group">
        <div className="label">DNI</div>
        <input className="input" placeholder="Ingresá tu número de DNI" />
      </div>
      <div className="input-group">
        <div className="label">Email</div>
        <input className="input" placeholder="Ingresá tu correo electrónico" />
      </div>
      <div className="input-group">
        <div className="label">Teléfono</div>
        <input className="input" placeholder="Ingresá tu número de teléfono" />
      </div>

      <div className="input-group">
        <div className="label">Tipo de cuenta</div>
        <input className="input" value="Cuenta familiar ICBC Kids" readOnly />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input type="checkbox" />{" "}
        <span className="small-muted">
          Acepto términos y condiciones (simulado)
        </span>
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 18 }}
        onClick={() => navigate("/registrar-menor")}
      >
        Crear cuenta familiar
      </button>
    </div>
  );
}
