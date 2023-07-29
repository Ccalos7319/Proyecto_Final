import Image from "next/image"
import "./main.css";
function Main({fecha, temMax,temMin,ciudad}) {
  // const currentDate = new Date();
  // const options = {
  //   weekday: "short",
  //   day: "numeric",
  //   month: "short",
  // };
  // fecha = currentDate.toLocaleDateString(undefined, options);

  return (
    <>
    <div className="contenedorPrincipal-tiempo">
      <div className="cardTiempo">
        <p>{fecha}</p>
        <div className="contenedorImagen">
          <img src="./Sleet.png" alt="" />
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