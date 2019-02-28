import React from "react"
import aboutStyle from "../styles/about.module.less"
import profile from "../images/profile.jpeg"

export default () => (
    <section className={aboutStyle.content} >
        <h2>Acerca de Mi</h2>
        <div className={aboutStyle.card}>
            <img src={profile} alt="sergio alcala" width="150" height="150" className={aboutStyle.profile} />
            <div className={aboutStyle.text} >
                <p>
                    Soy Ingeniero en Comunicaciones y Electronica con especialidad en Computación egresado 
                    de la Escuela superior de ingeniería mecánica y eléctrica (ESIME) unidad Zacatenco del IPN.
                </p>
                <p>
                    Cuento con mas de 8 años de experiencia en el mundo de la programación desde programas
                    para escritorio hasta aplicaciones web y móviles.
                </p>
            </div>
        </div>
    </section>
)