import React from "react"
import headerStyle from "../styles/header.module.less"
import logo from "../images/logosa.svg"
import bg from "../images/header-bg.png"

export default () => (
    <div>
        <img src={bg} alt="bg" className={headerStyle.bg}/>
        <section className={headerStyle.header}>
            <img src={logo} alt="Sergio Alcalá" className={headerStyle.logo}/>
            <h1 className={headerStyle.title}>!Hola que tal soy Sergio Alcalá!</h1>
            <p className={headerStyle.description}>Soy frontend developer por pasión, pero la vida profesional me ha echo aprender un poco de todo =)</p>
        </section>
    </div>
)