"use client"
import { ChangeEventHandler, useState } from "react";

import { getReadingLightColor } from "../../shared/utils";

export default function Home() {
  const [range, setRange] = useState(0);

  const changeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.target.value))
  }

  return (
    <div
      className="flex flex-col items-center w-full px-4 h-[100dvh] text-slate-900 justify-between"
      style={{background: getReadingLightColor(range)}}>
      <header>
        <h1 className="text-3xl font-bold p-5 text-center">Light Book</h1>
        <p>Selecione a cor e ilumine a sua leitura</p>
      </header>

      <div className="w-full flex flex-row items-center p-4 pb-20">
        <p>+ frio</p>
        <input
          type="range"
          min={-127}
          max={127}
          onChange={changeRange}
          className="w-full self-end"
          />
        <p>+ quente</p>
      </div>
    </div>
    
  );
}
