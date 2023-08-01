"use client"
import { useEffect,useState } from "react";

import "./nav.css";
import Image from "next/image";
import limpio from "../public/Clear.png";
import niebla from "../public/nube.png";
import granizo from "../public/Hail.png"
import lluviaPesada from "../public/HeavyRain.png";
import nubesLijeras from "../public/LightCloud.png";
import lloviznar from "../public/Shower.png";
import aguanieve from "../public/Sleet.png";
import nieve from "../public/Snow.png";
import tormenta from "../public/Thunderstorm.png";
function Nav({ grados,clima,city, buscar, ButtonClick, input, change }) {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const [active, setActive] = useState(false);
  const classActive = active === true ? "active" : "";
  function handleActive() {
    setActive(!active);
  }
  let tiempo;
  if (clima === "Clear" ) {
    tiempo = limpio;
  }
  if (clima === "Clouds" ) {
    tiempo = nubesLijeras;
  }
  if (clima === "Rain" ) {
    tiempo = lluviaPesada;
  }
  if (clima === "Thunderstorm" ) {
    tiempo = tormenta;
  }
  if (clima === "Snow" ) {
    tiempo = nieve;
  }
	if (clima === "Drizzle" ) {
    tiempo = lloviznar;
  }
  if (clima === "Sleet" ) {
    tiempo = aguanieve;
  }
  if (clima === "Hail" ) {
    tiempo = granizo;
  }
  if (clima === "Fog" ) {
    tiempo = niebla;
  }

  //Esta parte del cogigo me ayudara a obtener mi ubicacion 
  const [cityName, setCityName] = useState('');
  const KEY = "abaf2c338fc00a0cae5d37159644ba0a";
  const [dataCiudad, setDataCiudad] = useState();
  useEffect(() => {
    const handleGetLocation = async () => {
      if ("geolocation" in navigator) {
        try {
          // Obtener la ubicación del usuario
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
console.log(latitude)
console.log(longitude)
          // Usar el servicio de geocodificación inversa de Nominatim
          const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`);

          Promise.all([promesa]).then(async (value) => {
            const datos = await value[0].json();
            console.log(datos.name)
          });


        } catch (error) {
          console.error("Error al obtener la ubicación:", error);
          setCityName('Error al obtener la ubicación');
        }
      } else {
        console.error("Geolocalización no disponible en este navegador.");
      }
    };

    handleGetLocation();
  }, []);
  return (
    <>
      <div id="Search" className={classActive}>
        <div className="contenedorPrin">
          <div className="imgClose" >
            <img onClick={handleActive} src="./close.svg" alt="" />
          </div>

          <div className="SearchLocation">
            <input
              type="text"
              value={input}
              onChange={change}
              placeholder="Search location"
            />
            <button onClick={ButtonClick}>Search</button>
          </div>

          <div className="option">
            <button value={"london"} onClick={buscar}>
              London
            </button>
            <button value={"Barcelona"} onClick={buscar}>
              Barcelona
            </button>
            <button value={"Long Beach"} onClick={buscar}>
              Long Beach
            </button>
          </div>
        </div>
      </div>

      <nav className="contenedorPrincipal ">
        <div className="Milocation">
          <div>
            <button onClick={handleActive}>Search for places</button>
          </div>
          <div className="icono-ubicacion">
            <img src="./location.svg" alt="imagen" />
            
          </div>
        </div>
        <div className="fondo-Nubes">
          <div>
            <Image src={tiempo} width={150} height={140} alt="imagen" />
          </div>
         {/* <div>
          <img src="./Cloud-background.png" alt="imagen" />
         </div> */}
          
        </div>
        <div className="contenedor-Informacion">
          <div className="gradosCentigrados">
            <p>{grados.toFixed(0)}</p>
            <p>°C</p>
          </div>
          
          <h2>{clima}</h2>
          <div className="contenedor-Fecha">
            <h3>Today</h3>
            <span>.</span>
            <h3>{formattedDate}</h3>
          </div>
          <div className="location">
            <img src="./ubicacion.svg" alt="" />
            <h3>{city}</h3>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
