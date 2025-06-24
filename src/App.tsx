import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpo } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import './App.css'
import { ReactTyped } from "react-typed";
import { useState } from "react";

function App() {
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <div id="background"></div>
      <header>
          <FaGithubSquare id="github" fontSize={50} onClick={() => window.open("https://github.com/FabricioLR", "_blank")}/>
          <FaLinkedin id="linkedin" fontSize={50} onClick={() => window.open("https://www.linkedin.com/in/fabr%C3%ADcio-longo-de-ara%C3%BAjo-70321a228/", "_blank")}/>
      </header>
      <main>
        <div id="page1">
          <div>
            <h1 id="title1"><ReactTyped strings={["FabricioLR"]} typeSpeed={150} showCursor={false} onComplete={() => {setCompleted(true)}} /></h1>
            {
              completed ?
                <h2 id="title2"><ReactTyped strings={["Front - Back End Developer"]} typeSpeed={150} /></h2>
              :
                null
            }
          </div>
          <div id="tecnologias">
            <FaReact fontSize={35} className="tecnologia"/>
            <FaNodeJs fontSize={35} className="tecnologia"/>
            <TbBrandTypescript fontSize={35} className="tecnologia"/>
            <FaJava fontSize={35} className="tecnologia"/>
            <SiMysql fontSize={35} className="tecnologia"/>
            <SiRedux fontSize={35} className="tecnologia"/>
            <SiPostgresql fontSize={35} className="tecnologia"/>
            <SiSpringboot fontSize={35} className="tecnologia"/>
            <SiSequelize fontSize={35} className="tecnologia"/>
            <SiExpo fontSize={35} className="tecnologia"/>
            <SiPhp fontSize={35} className="tecnologia"/>
          </div>
        </div>
        <div id="page2">
          <h1 id="title3">Habilidades</h1>
          <div id="habilidades">
            <div className="habilidade">
              <div>
                <FaComputer fontSize={50}/>
                <p>Backend Dev NodeJS, Java e PHP</p>
              </div>
              <p>Programação funcional e orientada a objetos.</p>
            </div>
            <div className="habilidade">
              <div>
                <FaReact fontSize={50}/>
                <p>Frontend Dev React</p>
              </div>
              <p>Experiência em desenvolvimento Web com HTML, CSS, JS e React framework.</p>
            </div>
            <div className="habilidade">
              <div>
                <SiExpo fontSize={50}/>
                <p>Expo & React Native Dev Android</p>
              </div>
              <p>Entusiasta na programação de aplicativos Android.</p>
            </div>
          </div>
        </div>
        <div id="page3">
          <div id="projects">
            <div id="projectstitle">
              <h1>Meus Projetos</h1>
            </div>
            <div id="project1">
              <img src="/project1.png" alt=""  onClick={() => window.open("https://github.com/FabricioLR/Estetica", "_blank")}/>
              <div id="project1description">
                <h2>Estética</h2>
                <p>Site de estética feminina. Permite visualizar serviços de uma loja fictícia. Utilizando-se de
                Javascript e PHP.</p>
              </div>
            </div>
            <div id="project2">
              <img src="/project2.png" alt="" onClick={() => window.open("https://github.com/FabricioLR/Chat-front", "_blank")}/>
              <div id="project2description">
                <h2>Chat</h2>
                <p>Site para troca de mensagens feito em React, e Typescript que permite aos
                usuários enviarem mensagens em tempo real por meio do uso de Web Sockets.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h1>Envie-me uma mensagem</h1>
        <form action="https://formspree.io/f/xqaelaew" method="POST">
          <div>
            <label>
              Seu nome:
              <input type="text" name="name" required/>
            </label>
            <label>
              Email:
              <input type="email" name="email" required/>
            </label>
          </div>
          <label>
            Sua Mensagem:
            <textarea name="message" minLength={30} maxLength={1000}></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </>
  )
}

export default App
