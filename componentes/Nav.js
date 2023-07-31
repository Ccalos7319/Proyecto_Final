import { useState } from "react";
import "./nav.css";

function Nav({ grados,clima, city, buscar, ButtonClick, input, change }) {
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
            <img src="./location.svg" alt="" />
          </div>
        </div>
        <div className="fondo-Nubes">
          <img src="./Cloud-background.png" alt="" />
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
