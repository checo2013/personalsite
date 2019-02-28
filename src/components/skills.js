import React from "react"
import skillsStyle from "../styles/skills.module.less"
import { StaticQuery,graphql } from "gatsby"

export default () => {
    
  return (
    <StaticQuery 
      query={skillsQuery}
      render={ data => {
          console.log(data)
          const skills = data.site.siteMetadata.skills;
          return(
            <section className={skillsStyle.content} >
              <h2>Skills</h2>
              <div className={skillsStyle.skillsContent}>
                {skills.map((skill,index) => {
                    return(
                      <div className={skillsStyle.skill}>
                        <img src={skill.img} alt={skill.name} width="150" height="150" />
                        <label>{ skill.name }</label>
                      </div>
                    )    
                  }
                )}
              </div>
            </section>
          )
      }}
    />
  )
}

const skillsQuery = graphql`
  query skillsQuery {
    site {
      siteMetadata {      
        skills{
          name
          img 
        }
      }
    }
  }
`