import "./App.css";
import "./index.css";
import Icone from "./image/icone.png";
import React, { useState } from 'react';

function App() {
  const [diffInYears, setDiffInYears] = useState(0);
  const [diffInMonths, setDiffInMonths] = useState(0);
  const [diffInRemainingDays, setDiffInRemainingDays] = useState(0);

  function alerta() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var dataSelecionada = new Date(ano, mes - 1, dia);

    var dataAtual = new Date();

    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    var anoAtual = dataAtual.getFullYear();

    var dataAtualFormatada = new Date(anoAtual, mesAtual - 1, diaAtual);

    var diffInMs = dataAtualFormatada - dataSelecionada;
    var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    var diffYears = Math.floor(diffInDays / 365.25);
    var diffMonths = Math.floor((diffInDays % 365.25) / 30.44);
    var diffRemainingDays = Math.floor((diffInDays % 365.25) % 30.44);

    setDiffInYears(diffYears);
    setDiffInMonths(diffMonths);
    setDiffInRemainingDays(diffRemainingDays);
  }

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins bg-fundo">
      <div className="p-10 md:p-20 w-full max-w-screen-lg rounded bg-branco relative ">
        <div className="flex flex-wrap mt-4 ">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h1 className="text-gray-500">D A Y</h1>
            <input
              type="text"
              id="dia"
              required
              className="border-2 border-gray-300 rounded w-full md:w-40 h-20 mt-2 p-5 text-3xl"
            />
          </div>
          <div className="w-full md:w-auto ml-0 md:ml-10 mb-4 md:mb-0">
            <h1 className="text-gray-500">M O N T H</h1>
            <input
              type="text"
              id="mes"
              className="border-2 border-gray-300 rounded w-full md:w-40 h-20 mt-2 p-5 text-3xl"
            />
          </div>
          <div className="w-full md:w-auto ml-0 md:ml-10">
            <h1 className="text-gray-500">Y E A R</h1>
            <input
              type="text"
              id="ano"
              className="border-2 border-gray-300 rounded w-full md:w-40 h-20 mt-2 p-5 text-3xl"
            />
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 ml-36 mt-8">
            <button
              onClick={alerta}
              className="w-28 h-28 bg-icone rounded-full flex justify-center"
            >
              <img src={Icone} className="mt-8" alt="icone" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-10">
          <div className="flex flex-wrap mt-8 text-3xl md:text-9xl">
            <p className="text-azul">{diffInYears}</p>
            <h1 className="ml-6">years</h1>
          </div>
          <div className="flex flex-wrap text-3xl md:text-9xl">
            <p className="text-azul">{diffInMonths}</p>
            <h1 className="ml-6">months</h1>
          </div>
          <div className="flex flex-wrap text-3xl md:text-9xl">
            <p className="text-azul">{diffInRemainingDays}</p>
            <h1 className="ml-6">days</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;