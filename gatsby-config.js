module.exports = {
    siteMetadata: {
        title: `Sergio alcalá`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@checoiopn`,
        skills:[
            {
                name:"HTML 5",
                img:"../images/skills/html.png"
            },
            {
                name:"CSS",
                img:"../images/skills/css.png"
            },
            {
                name:"JavaScript",
                img:"../images/skills/js.png"
            },
            {
                name:"Progressive Web Apps",
                img:"../images/skills/pwa.png"
            },
            {
                name:"Angular",
                img:"../images/skills/angular.png"
            },
            {
                name:"Ionic",
                img:"../images/skills/ionic.png"
            },
            {
                name:"React JS",
                img:"../images/skills/react.png"
            },
            {
                name:"Less",
                img:"../images/skills/less.png"
            },
            {
                name:"Python",
                img:"../images/skills/python.png"
            },
            {
                name:"Node Js",
                img:"../images/skills/node.png"
            },
            {
                name:"MySQl",
                img:"../images/skills/mysql.png"
            },
            {
                name:"PHP",
                img:"../images/skills/php.png"
            },
        ]
    },
    plugins:[
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-less`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },  
        },
    ]
}