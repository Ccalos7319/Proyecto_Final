import { useState } from "react";
import "./nav.css";
import Search from "./Search";
function Nav({ grados, city,handle }) {
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
    setActive(!active)
  }
 

  return (
    <>
      <div id="Search"className={classActive} >
        <Search buscar={handle} />
      </div>

      <nav className="contenedorPrincipal ">
        <div className="Milocation">
          <div>
            <button onClick={handleActive}>Search for places</button>
          </div>
          <div>
            <img src="./MiLocation.png" alt="" />
          </div>
        </div>
        <div className="fondo-Nubes">
          <img src="./fondoNubes.png" alt="" />
        </div>
        <div className="contenedor-Informacion">
          <h1>{grados.toFixed(0)}°c</h1>
          <h2>Shower</h2>
          <div className="contenedor-Fecha">
            <h3>Today</h3>
            <span>.</span>
            <h3>{formattedDate}</h3>
          </div>
          <div className="location">
            <img src="./city.png" alt="" />
            <h3>{city}</h3>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
