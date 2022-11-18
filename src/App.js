/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DATA_POST } from './components/CardPost/DATA_POST';

function App() {
  var pessoas = [
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ];

  // const meuMap = pessoas.map((pessoa) => {
  //   return<div>{pessoa.name}</div>;
  // });

  // //como pegar o ultimo index do array
  // console.log(pessoas[pessoas.length-1]);
  // console.log(pessoas[4])

  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const carros = ["uno", "palio", "celta", "gol", "fiesta"];

  // const meuMap = pessoas.map((item) => {
  //   return item.nome;
  // });

    //constante
  const filterInNumeros = numeros.filter((item) => {
    return item > 3;
  });

  const meuFilter = pessoas.filter((item) => {
    return item.nome === "jullia";
  });
  console.log(meuFilter);

  // const meuForEach = pessoas.forEach((item) => {
  //   return (item.nome = "maria");
  // });

  const meuFind = pessoas.find((item) => {
    return item.idade === 24;
  });

  const includesInNumeros = numeros.includes(2);

  const meuIncludes = pessoas.filter((item) => item.nome.includes("j"));

  // const meuMap = pessoas.map((elemento) => {
  //   return <li>{elemento.nome}</li>;

  // });

  // const data = DATA_POST;

  // console.log(data);

  // const dataMap = data.map((item) => {
  //   return <button>{item.titulo}</button>
  // });

  return <div></div>;
}

export default App;
