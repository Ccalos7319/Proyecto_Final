
import "./main.css";
function Main({nuevaFecha,imagenTiempo, temMax,temMin,ciudad}) {
  const currentDate = new Date(nuevaFecha);
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <>
    <div className="contenedorPrincipal-tiempo">
      <div className="cardTiempo">
        <p>{formattedDate}</p>
        <div className="contenedorImagen">
          <img src={imagenTiempo} alt="" />
        </div>
        <div className="contenedor-temperatura">
          <p>{temMax.toFixed(0)}°C</p>
          <p>{temMin.toFixed(0)}°C</p>
          <p>{ciudad}</p>
        </div>
      </div>
     
    </div>

    
    </>
    
  )
}

export default Main