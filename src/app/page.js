"use client";

import { useEffect, useState } from "react";
import Nav from "../../componentes/Nav";
import Main from "../../componentes/Main";

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
      setData1(datos1);
    });
    console.log(data);
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
          <Main fecha={data1.list[2].dt_txt} temMax={data1.list[2].main.temp_max} temMin={data1.list[2].main.temp_min} ciudad={data1.city.name}/>
        </>
      )}
    </div>
  );
}
