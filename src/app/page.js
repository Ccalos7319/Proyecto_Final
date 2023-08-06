"use client";

import { useEffect, useState } from "react";
import Nav from "../../componentes/Nav";
import Main from "../../componentes/Main";
import Destacados from "../../componentes/Destacados";
import Feet from "../../componentes/feet";

export default function Home() {
  const KEY = "abaf2c338fc00a0cae5d37159644ba0a";
  const [city, setCity] = useState("Arequipa");
  const [unidadMedidad, setUnidadMedida] = useState("metric");
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [isFirstProcessed, setIsFirstProcessed] = useState(true);
  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${unidadMedidad}`
    );
    const promesa1 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=${unidadMedidad}`
    );

    Promise.all([promesa, promesa1]).then(async (value) => {
      const datos = await value[0].json();
      const datos1 = await value[1].json();
      setData(datos);

      const dataFiltrada = datos1.list.reduce((result, el) => {
        const fecha = el.dt_txt.split(" ")[0]; // Obtenemos solo la fecha sin la hora

        if (!result[fecha]) {
          if (!isFirstProcessed) {
            el.dt_txt = "Palabra"; // Cambiar la fecha por la palabra deseada en el primer objeto
            setIsFirstProcessed(false); // Desactivar la bandera para los siguientes objetos
          }
          result[fecha] = el;
        }
        return result;
      }, {});

      setData1(Object.values(dataFiltrada).slice(1, 6));
    });
  }, [city]);

  function handleClick(e) {
    const value = e.target.value;
    setCity(value);
  }
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    
  };

  const handleButtonClick = () => {
    setCity(inputValue);
    setInputValue("");
  };

  //Esta parte del cogigo me ayudara a obtener mi ubicacion
  const [ubicacion, setUbicacion] = useState();
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
          console.log(latitude);
          console.log(longitude);

          const promesa = fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`
          );

          Promise.all([promesa]).then(async (value) => {
            const datos = await value[0].json();
            console.log(datos.name);
            setUbicacion(datos.name);
          });
        } catch (error) {
          console.error("Error al obtener la ubicación:", error);
        }
      } else {
        console.error("Geolocalización no disponible en este navegador.");
      }
    };

    handleGetLocation();
  }, []);

  const handleButtonUbicacion = () => {
    setCity(ubicacion);
  };
  const handleButtontemperatura = () => {
      
  }

  return (
    <>
      <div>
        {data && (
          <div className="contenedor-responsive-principal">
            <div>
              <Nav
                input={inputValue}
                ButtonClick={handleButtonClick}
                ubicacion={handleButtonUbicacion}
                change={handleChange}
                buscar={handleClick}
                grados={data.main.temp}
                clima={data.weather[0].main}
                city={data.name}
              />
            </div>

            <div className="cont">
              <div className="boton-Grados-CF">
                <button onClick={handleButtontemperatura}>°C</button>
                <button onClick={handleButtontemperatura}>°F</button>
              </div>
              <div className="contenedorPrincipal-tiempo">
              {data1 &&
                data1.map((elemento, i) => (
                  <Main
                    key={i}
                    nuevaFecha={elemento.dt_txt}
                    imagenTiempo={elemento.weather[0].main}
                    temMax={elemento.main.temp_max}
                    temMin={elemento.main.temp_min}
                  />
                ))}
              </div>
              <div className="destacados">
                <Destacados
                  presure={data.main.pressure}
                  visibility={data.visibility}
                  humidity={data.main.humidity}
                  speed={data.wind.speed}
                />

                <div className="feet">
                  <Feet />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
