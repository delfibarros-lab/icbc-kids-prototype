import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import MinorHome from "./pages/MinorHome.jsx";
import MinorNewTransfer from "./pages/MinorNewTransfer.jsx";
import MinorReceiveMoney from "./pages/MinorReceiveMoney.jsx";
import ParentAccount from "./pages/ParentAccount.jsx";
import ParentControls from "./pages/ParentControls.jsx";
import ParentBlockMinor from "./pages/ParentBlockMinor.jsx";
import ParentApproveOperations from "./pages/ParentApproveOperations.jsx";
import ConfirmPurchase from "./pages/ConfirmPurchase.jsx";
import ParentReports from "./pages/ParentReports.jsx";
import CreateFamilyAccount from "./pages/CreateFamilyAccount.jsx";
import RegisterMinor from "./pages/RegisterMinor.jsx";
import ParentLimits from "./pages/ParentLimits.jsx";

function AppShell({ children }) {
  return (
    <div className="app-root">
      <div className="app-shell">{children}</div>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Onboarding */}
        <Route
          path="/crear-cuenta-familiar"
          element={<CreateFamilyAccount />}
        />
        <Route path="/registrar-menor" element={<RegisterMinor />} />

        {/* Flujos menor */}
        <Route path="/minor/home" element={<MinorHome />} />
        <Route path="/minor/transfer/new" element={<MinorNewTransfer />} />
        <Route path="/minor/receive" element={<MinorReceiveMoney />} />

        {/* Flujos adulto */}
        <Route path="/parent/account" element={<ParentAccount />} />
        <Route path="/parent/controls" element={<ParentControls />} />
        <Route path="/parent/limits" element={<ParentLimits />} />
        <Route path="/parent/block" element={<ParentBlockMinor />} />
        <Route path="/parent/approve" element={<ParentApproveOperations />} />
        <Route path="/parent/confirm-purchase" element={<ConfirmPurchase />} />
        <Route path="/parent/reports" element={<ParentReports />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="screen">
              <button className="back-button" onClick={() => navigate(-1)}>
                ←
              </button>
              <h2>Pantalla no encontrada</h2>
              <button
                className="primary-button"
                onClick={() => navigate("/")}
              >
                Volver al inicio
              </button>
            </div>
          }
        />
      </Routes>
    </AppShell>
  );
}
