"use client";
import { useEffect, useState } from "react";

import "./nav.css";
import Image from "next/image";
import limpio from "../public/Clear.png";
import niebla from "../public/neblina.png";
import granizo from "../public/Hail.png";
import lluviaPesada from "../public/HeavyRain.png";
import nubesLijeras from "../public/LightCloud.png";
import lloviznar from "../public/Shower.png";
import aguanieve from "../public/Sleet.png";
import nieve from "../public/Snow.png";
import tormenta from "../public/Thunderstorm.png";
import polvo from "../public/Dust.png";
function Nav({
  grados,
  clima,
  city,
  buscar,
  ButtonClick,
  ubicacion,
  input,
  change,
}) {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [active, setActive] = useState(false);
  const classActive = active === true ? "active" : "";
  function handleActive() {
    setActive(!active);
  }
  
 
  
  let tiempo;
  if (clima === "Clear") {
    tiempo = limpio;
  }
  if (clima === "Clouds") {
    tiempo = nubesLijeras;
  }
  if (clima === "Rain") {
    tiempo = lluviaPesada;
  }
  if (clima === "Thunderstorm") {
    tiempo = tormenta;
  }
  if (clima === "Snow") {
    tiempo = nieve;
  }
  if (clima === "Drizzle") {
    tiempo = lloviznar;
  }
  if (clima === "Sleet") {
    tiempo = aguanieve;
  }
  if (clima === "Hail") {
    tiempo = granizo;
  }
  if (clima === "Fog" || clima === "Mist") {
    tiempo = niebla;
  }
  if (clima === "Dust") {
    tiempo = polvo;
  }

  return (
    <>
      <div id="Search" className={classActive}>
        <div className="contenedorPrin">
          <div className="imgClose">
            <img onClick={handleActive} src="./close.svg" alt="" />
          </div>

          <div className="SearchLocation">
            <div className="SearchLocationLupa">
              <img src="./Lupa.svg" alt="" />
              <input
                type="text"
                value={input}
                onChange={change}
                placeholder="Search location"
              />
            </div>

            <div onClick={handleActive}>
              <button onClick={ButtonClick}>Search</button>
            </div>
          </div>

          <div className="option">
            <div onClick={buscar}>
              <button onClick={handleActive} class="mi-boton" value={"london"}>
                London 
              </button>
            </div>
            <div onClick={buscar}>
              <button
                onClick={handleActive}
                class="mi-boton"
                value={"Barcelona"}
              >
                Barcelona 
              </button>
            </div>
            <div onClick={buscar}>
              <button
                onClick={handleActive}
                class="mi-boton"
                value={"Long Beach"}
              >
                Long Beach 
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="contenedorPrincipal ">
        <div className="contenedorInterno">
          <div className="Milocation">
          <div>
            <button onClick={handleActive}>Search for places</button>
          </div>
          <div className="icono-ubicacion">
            <img onClick={ubicacion} src="./location.svg" alt="imagen" />
          </div>
        </div>
        <div className="container">
          <Image className="imageBack" src={tiempo} width={150} height={140} alt="imagen" />
          <img  className="imageFront active" src="./Cloud-background.png" alt="imagen" />
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
        </div>
        
      </nav>
    </>
  );
}

export default Nav;
