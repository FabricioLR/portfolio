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
import './App.css'

function App() {
  return (
    <>
      <header>
          <FaGithubSquare id="github" fontSize={50} onClick={() => window.open("https://github.com/FabricioLR", "_blank")}/>
          <FaLinkedin id="linkedin" fontSize={50} onClick={() => window.open("https://www.linkedin.com/in/fabr%C3%ADcio-longo-de-ara%C3%BAjo-70321a228/", "_blank")}/>
      </header>
      <main>
        <div id="page1">
          <h1 id="title1">FabricioLR</h1>
          <h2 id="title2">Front & Back End Developer</h2>
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
          </div>
        </div>
        <div id="page2">
          <img src="image2.jpg" alt="" />
          <h1 id="title3">Habilidades</h1>
          <div id="habilidades">
            <div className="habilidade">
              <div>
                <FaComputer fontSize={50}/>
                <p>Backend Dev NodeJS, Java</p>
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

        </div>
      </main>
    </>
  )
}

export default App
