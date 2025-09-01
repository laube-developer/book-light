"use client"
import { useState } from "react";

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
        <section className="flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>

          <h1 className="text-3xl font-bold p-5 text-center">Light Book</h1>
        </section>
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
