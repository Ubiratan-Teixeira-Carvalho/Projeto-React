import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Article from "./components/Article/Article";

import "./styles/App.css";

import Imagem2 from "./assets/images/Imagem2.jpg";
import Imagem3 from "./assets/images/Imagem3.jpeg";

//componente em classe é uma classe que herda a clase  component do react,
//e retorna HTML dentro do método render.

class App extends React.Component {


  render(){ //método mais importante de um componente é o método render(reponsavel por rendenziar o conteudo HTML na tela) que vem de dentro do react.component
    return (
    <>
      <Navbar/>

      <section id="articles">
        <Article 
        title="Designing Dashboards"
        provider="NASA"
        thumbnail={Imagem3}
        />

        <Article
         title="Vibrant Portraits of 2020"
         provider="SpaceNews"
         thumbnail={Imagem2}
         />

        <Article
         title="It not worth it! "
         provider="Spaceflight Now"
         thumbnail={Imagem3}
         />


        <Article 
        title="Breaking news"
         provider="Spaceflight Now"
         thumbnail={Imagem2}
        />



        <Article title="Off the record "
         provider="GlobNews"
         thumbnail={Imagem3}
        />
      </section>
     </>
    );  
  }
}

export default App; 
