import { useState, useRef } from "react"
import "./App.css"

export default function App() {
  const [preview, setPreview] = useState(null)
  const [imagen, setImagen] = useState(null)
  const inputRef = useRef(null)
  const inputCamaraRef = useRef(null)

  // const handleArchivo = (archivo) => {
  //   if (!archivo) return
  //   setImagen(archivo)
  //   setPreview(URL.createObjectURL(archivo))
  // }

  const handleArchivo = (archivo) => {
    if (!archivo) return
    const formatosValidos = ["image/png", "image/jpeg", "image/jpg"]
    if (!formatosValidos.includes(archivo.type)) {
      alert("Formato no válido. Solo se aceptan PNG, JPG y JPEG.")
      return
    }
    setImagen(archivo)
    setPreview(URL.createObjectURL(archivo))
  }

  const handleInputChange = (e) => {
    handleArchivo(e.target.files[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    handleArchivo(e.dataTransfer.files[0])
  }

  const handleDragOver = (e) => e.preventDefault()

  return (
    <div className="min-h-screen bg-[#F4F7F4] flex items-center justify-center px-4 py-10">
      <div className="card-principal">

        {/* HEADER */}
        <div className="mb-7">
          <h1 className="logo-texto">AvoCheck</h1>
          <h2 className="titulo-principal">El punto exacto de tu aguacate</h2>
          <p className="subtitulo">
            Toma una foto de tu aguacate y en segundos te decimos si ya está
            listo para comer y cuántos días le quedan para pudrirse.
            Solamente tienes que...
          </p>
        </div>

        {/* PASOS */}
        <div className="flex flex-col gap-3 mb-7">
          {[
            "Subir o tomar la foto de tu aguacate",
            "Esperar mientras se procesa la foto",
            "¡Listo! Mira cuánto le queda a tu aguacate",
          ].map((paso, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="paso-numero">
                <span>{i + 1}</span>
              </div>
              <span className="paso-texto">{paso}</span>
            </div>
          ))}
        </div>

        {/* ZONA DE CARGA */}
        <div
          className={`zona-carga ${preview ? "zona-carga--con-imagen" : ""}`}
          onClick={() => inputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {preview ? (
            <img
              src={preview}
              alt="preview aguacate"
              className="imagen-preview"
            />
          ) : (
            <>
              <div className="icono-upload">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="#2D5A1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <p className="upload-label">Sube una foto de tu aguacate</p>
              <p className="upload-hint hidden md:block">
                Arrastra tu imagen aquí o haz clic para buscar
              </p>
              <p className="upload-formatos hidden md:block">Formatos aceptados: PNG, JPG, JPEG</p>
            </>
          )}
        </div>

        {/* INPUT OCULTO GALERÍA */}
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          className="hidden"
          onChange={handleInputChange}
        />

        {/* INPUT OCULTO CÁMARA */}
        <input
          ref={inputCamaraRef}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          capture="environment"
          className="hidden"
          onChange={handleInputChange}
        />

        {/* BOTONES */}
        <div className="flex flex-col gap-3 mt-5">

          {/* Tomar foto — solo móvil */}
          <button
            className="btn-primario md:hidden"
            onClick={() => inputCamaraRef.current.click()}
          >
            Tomar Foto con Cámara
          </button>

          {/* Adjuntar / Seleccionar */}
          <button
            className="btn-primario"
            onClick={() => inputRef.current.click()}
          >
            <span className="md:hidden">Adjuntar Foto</span>
            <span className="hidden md:inline">Seleccionar imagen</span>
          </button>

          {/* Analizar — aparece cuando hay imagen */}
          {imagen && (
            <button className="btn-analizar">
              Analizar aguacate
            </button>
          )}

        </div>

      </div>
    </div>
  )
}