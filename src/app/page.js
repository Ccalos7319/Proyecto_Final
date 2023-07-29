"use client";

import { useEffect, useState } from "react";
import Nav from "../../componentes/Nav";
import Main from "../../componentes/Main";
import Destacados from "../../componentes/Destacados";

export default function Home() {
  const KEY = "abaf2c338fc00a0cae5d37159644ba0a";
  const [city, setCity] = useState("Arequipa");
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    );
    const promesa1 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=metric`
    );

    Promise.all([promesa, promesa1]).then(async (value) => {
      const datos = await value[0].json();
      const datos1 = await value[1].json();
      setData(datos);

      const dataFiltrada = datos1.list.reduce((result, el) => {
        const fecha = el.dt_txt.split(" ")[0]; // Obtenemos solo la fecha sin la hora
        if (!result[fecha]) {
          result[fecha] = el;
        }
        return result;
      }, {});
      console.log(Object.values(dataFiltrada));
      setData1(Object.values(dataFiltrada));
    });
  }, [city]);

  function handleClick(e) {
    const value = e.target.value;
    setCity(value);
  }

  return (
    <div>
      {data && (
        <>
          <Nav handle={handleClick} grados={data.main.temp} city={data.name} />
          <div className="cont">
            {data1 &&
              data1.map((elemento, i) => (
                <Main
                  key={i}
                  fecha={elemento.dt_txt}
                  temMax={elemento.main.temp_max}
                  temMin={elemento.main.temp_min}
                
                />
              ))}
          </div>
          <Destacados />
        </>
      )}
    </div>
  );
}
