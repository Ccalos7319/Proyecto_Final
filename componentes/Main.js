
import "./main.css";
import Image from "next/image";
import limpio from "../public/Clear.png";
import granizo from "../public/Hail.png"
import lluviaPesada from "../public/HeavyRain.png";
import nubesLijeras from "../public/LightCloud.png";
import lloviznar from "../public/Shower.png";
import aguanieve from "../public/Sleet.png";
import nieve from "../public/Snow.png";
import tormenta from "../public/Thunderstorm.png";

function Main({nuevaFecha,imagenTiempo, temMax,temMin}) {
  const currentDate = new Date(nuevaFecha);
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  let clima;
  if (imagenTiempo === "Clear" ) {
    clima = limpio;
  }
  if (imagenTiempo === "Clouds" ) {
    clima = nubesLijeras;
  }
  if (imagenTiempo === "Rain" ) {
    clima = lluviaPesada;
  }
  if (imagenTiempo === "Thunderstorm" ) {
    clima = tormenta;
  }
  if (imagenTiempo === "Snow" ) {
    clima = nieve;
  }
	if (imagenTiempo === "Drizzle" ) {
    clima = lloviznar;
  }
  if (imagenTiempo === "Sleet" ) {
    clima = aguanieve;
  }
  if (imagenTiempo === "Hail" ) {
    clima = granizo;
  }

  return (
    <>
    
    <div className="contenedorPrincipal-tiempo">
      
      <div className="cardTiempo">
        <p>{formattedDate}</p>
        <div className="contenedorImagen">
          <Image src={clima} width={30} height={30} alt="imagen clima"/>

         
        </div>
        <div className="contenedor-temperatura">
          <p>{temMax.toFixed(0)}°C</p>
          <p>{temMin.toFixed(0)}°C</p>
          
        </div>
      </div>
     
    </div>

    
    </>
    
  )
}

export default Main