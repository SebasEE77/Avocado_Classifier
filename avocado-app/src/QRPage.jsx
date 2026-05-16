import { QRCodeSVG } from "qrcode.react"

export default function QRPage() {
    const url = window.location.origin + "/inicio"

    return (
    <div className="min-h-screen bg-[#F4F7F4] flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="logo-texto">AvoCheck</h1>
        <p className="subtitulo text-center">
            Escanea el código QR para acceder a la interfaz desde tu celular
        </p>
        <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "16px" }}>
            <QRCodeSVG value={url} size={220} fgColor="#2D5A1B" />
        </div>
    </div>
    )
}