import { useLocation, useNavigate } from "react-router-dom"
import "./Results.css"

export default function Results() {
    const { state } = useLocation()
    const navigate = useNavigate()

    const { preview, resultado } = state || {}

    const handleReintentar = () => {
        navigate("/inicio")
    }

    return (
    <div className="min-h-screen bg-[#F4F7F4] flex items-center justify-center px-4 py-10">
        <div className="card-principal">

        {/* HEADER */}
        <div className="mb-6">
            <h1 className="logo-texto">AvoCheck</h1>
            <h2 className="titulo-principal">¡Aquí está tu aguacate!</h2>
            <p className="subtitulo">
            Verifica en qué estado de madurez está tu aguacate y cuánto tiempo tienes para consumirlo.
            </p>
        </div>

        {/* IMAGEN */}
        <div className="zona-carga zona-carga--con-imagen mb-5">
            <img src={preview} alt="aguacate analizado" className="imagen-preview" />
        </div>

        {/* TARJETAS ESTADO + DÍAS */}
        <div className="resultado-grid mb-5">
            <div className="resultado-card">
            <p className="resultado-label">Estado de Madurez</p>
            <p className="resultado-valor" style={{ color: "#2D5A1B" }}>{resultado.clase}</p>
            </div>
            <div className="resultado-card">
            <p className="resultado-label">Vida útil restante</p>
            <p className="resultado-valor" style={{ color: "#2D5A1B" }}>{resultado.dias} días</p>
            </div>
        </div>
        
        {/* BARRA DE PROBABILIDAD - Solo clase ganadora */}
        <div className="confianza-card mb-6">
            <p className="confianza-titulo">Porcentaje de precisión de la predicción</p>
            <div className="confianza-fila">
                <span className="confianza-clase">{resultado.clase}</span>
                <div className="confianza-barra-bg">
                    <div
                        className="confianza-barra-fill"
                        style={{ width: `${resultado.probabilidades[resultado.clase]}%` }}
                    />
                </div>
                <span className="confianza-pct">
                    {resultado.probabilidades[resultado.clase]}%
                </span>
            </div>
        </div>

        <button className="btn-primario" onClick={handleReintentar}>
            Probar con otro aguacate
        </button>

        </div>
    </div>
    )
}