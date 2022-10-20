import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { randomBetween } from "../common";
import { RailsIcon, ReactIcon } from "../components/brandedIcons";
import { FrontEndIcon } from "../components/skillIcons";
import BackEndIcon from "../components/skillIcons/backEndIcon";
import MobileIcon from "../components/skillIcons/mobileIcon";
import { useTimeout } from "../hooks";

const skills = [
    {
        title: "FrontEnd Development",
        icon: <FrontEndIcon/>,
        description: "Siendo sincero nunca le tuve mucho aprecio al FrontEnd. Había empezado mi carrera como desarrollador Back y muy posiblemente esa habría sido mi meta final sino hubiera descubierto mi framework favorito... React. De ahí en adelante supe que podría armonizarme entre ambos mundos... y pues me tienes aquí, haciendo todo tipo de experimentos con SVGs, contextos y experiencia UI/UX.",
        technologies: [
            {
                id: 1,
                name: "HTML5",
                description: "Siempre me gusto comparar el desarrrollo de las etiquetas HTML5 con la estructura narrativa de una novela. Mi escritor favorito H. Murakami me dio a entender que planificar contextos generales es más importante que simplemente poner divs de forma desconsiderada (Sin mencionar además que a Google no le gusta).",
                progress: 90,
            },{
                id: 2,
                name: "CSS",
                description: "Y como olvidarnos del entorno... Tener una buena estructura argumental es primordial, pero saber como desenvolver su ambiente es lo que te hace único. Otra de las cosas que más aprecio de Murakami es el talento que tiene al momento de describir sus mundos... y puede que no sea la mejor analogía, pero considero que CSS es capaz de hacer lo mismo. No solo es decorar, es brindar identidad a tu entorno web.",
                progress: 85,
            },{
                id: 3,
                name: "Javascript",
                description: "Esta si está difícil... y no me es sencillo hacer una analogía. Js es mi lenguaje de programación principal (y quizá el que más aprecio), al inicio lo usaba intensamente para paliar las limitadas interacciones que podía obtener con CSS aunque con el pasar del tiempo supe que también podía aprovecharlo para hacer optimizaciones en cuanto a la gestión de datos, especialmente si estos renderizaban en pantalla. Pese a mi aprecio y favoritismo, también soy consciente de sus limitaciones y carencias (especialmente con lo caótico que pueden ser sus tipos de datos), por lo que es muy probable que en un futuro no muy lejano esté programando completamente sobre TypeScript.",
                progress: 90,
            },{
                id: 4,
                name: "ReactJs",
                description: "Fue la puerta que me abrió al mundo FrontEnd. Es mi guía en esta rama del desarrollo web y posiblemente el framework que más conozca. Con React no solo aprendí a diseñar un sitio web, sino a gestionar sus recursos de la manera más eficiente posible. Ya sea mediante el uso de contextos, memoization, hooks o reducers, el propósito al final es hacer la menor cantidad de renders posibles.",
                progress: 90
            }
        ]
    },{
        title: "Backend Development",
        icon: <BackEndIcon/>,
        description: "Puede que sea la rama que más aprecio en el desarrollo web (posiblemente porque aquí empecé). Tengo, como decirlo, cierto... fetiche... por traducir la idea de un sistema a un conjunto de relaciones y tablas... es algo que siempre me ha apasionado. Y en la misma senda, también adquirí una mala costumbre y es que suelo hacer los ERD's de forma directa en SQL para después implementarlos a nivel de base de datos... quizá un poco de formalidad me venga bien a futuro. En cuanto a otros aspectos del Backend, la seguridad siempre es algo que suelo priorizar especialmente cuando de por medio existen cuentas y roles entre los usuarios. Por lo general son problemas que suelo atacar con sistemas de sesiones y Json tokens.",
        technologies: [
            {
                id: 5,
                name: "Rails",
                description: "Construido sobre Ruby (otro lenguaje de programación al que también le tengo mucho aprecio) es un framework que llegué a dominar junto a mis compañeros en Codeable. Al inicio lo usaba bajo el modelo MVP y ponía toda la carga tanto del Front como del Back en el mismo servidor. La experiencia me dio a entender que no era la opción más viable y con el tiempo comprendí que un sistema REST Api sería el más adecuado... ya el Front se lo dejaría a mis pastor React (además de que aquí hacer UI/UX es un poco más complejo).",
                progress: 75,
            },{
                id: 6,
                name: "NestJs",
                description: "Es mi framework preferido en cuanto al desarrollo backend con javascript se refiere. Si bien, inicialmente empecé a trabajar con Express, la curiosidad me empujo a pensar que varias de las cosas relacionadas a la arquitectura del Backend podían ya venir implementadas en otro framework (Tales como controladores, servicios, entidades, etc). Por lo general suelo utilizar este framework con modelos relacionales, siendo en esos casos Sequelize y PostgreSQL el ORM y la base de datos que menos problemas me han dado. (PD. Prisma me parece una buena opción, pero su documentación... bueno).",
                progress: 75,
            },{
                id: 7,
                name: "PostgreSQL",
                description: "No tengo mucho que decir de Postgres. Es mi gestor de bases de datos favorito. Rápido, sencillo y de muy fácil integración. Recuerdo haberlo utilizado desde mis primeros años en la universidad en donde hacíamos pruebas exhautivas con millones de datos (Creo que mi record fue con 25 milllones de registros), hasta la actualidad en donde suelo integrarlo con Express, Nestjs, Django, Rails, etc. ",
                progress: 85,
            },{
                id: 8,
                name: "Django",
                description: "Por alguna razón utilizar este framework me hace sentir viejo... siempre que me pongo a diseñar los modelos para la base de datos percibo como varias canas se asentan en mi cabeza... es una sensación bastante peculiar. Es de los primeros frameworks para Backend que utilicé aunque no de los que más profundizé (Y lo digo a consciencia pues siendo el novato que era en ese entonces, pasé por alto muchas cosas).  Últimamente, he decidido retomarlo, aunque esta vez junto a Graphene a fin de observar cuán bien optimiza esta librería las queries.",
                progress: 65,
            }
        ]
    },{
        title: "Mobile Development",
        icon: <MobileIcon/>,
        description: "A decir verdad no llevo mucho en el mundo mobile (Posiblemente de 9 a 11 meses). Es un entorno en el que caí por casualidad (pues era un curso electivo), pero que me terminó gustando. Siendo los teléfonos las herramientas que más tenemos a mano y con una cantidad razonable de sensores, el rango de posibles aplicaciones a crear es sencillamente enorme.",
        technologies: [
            {
                id: 9,
                name: "ReactNative",
                description: "Era inevitable. Mi curiosidad por saber que más podía hacer con React me invitó a crear distintos proyectos en su versión móvil. Por lo general no suelo trabajar con React Native nativo pues en algunos casos el acoplamiento de nuevas librerías suele ser trabajaso. En su defecto, y por general con proyectos sencillos, suelo tener preferencia con Expo. Esta caja negra con varias librerías incorporadas a nivel interno hace que la gestión y despliegue de destintas versiones del mismo aplicativo sea extremadamente sencillo.",
                progress: 75
            }
        ]
    }
]

const projects = [
    {
        title: "GetThatHome - FrontEnd",
        description: "Plataforma diseñada para la creación, alquiler y ventas de propiedades. Permite definir la características de cada inmueble así como la ubicación y el contacto entre propietario y cliente. La búsqueda es intuitiva y la gestión entre roles bastante ágil.",
        url: "projects/GetThatHomeFrontEnd.PNG",
        technologies: [
            {name: "Reactjs"},
            {name: "HTML5"},
            {name: "CSS"},
        ],
    },{
        title: "GetThatHome - BackEnd",
        description: "Soporte para GetThatHome. REST Api con capa de seguridad a base de tokens y una estructura que da soporte a varios roles.",
        url: "projects/GetThatHomeBackend.PNG",
        technologies: [
            {name: "Ruby"},
            {name: "Rails"},
            {name: "Postgresql"},
        ]
    },{
        title: "Burger Website",
        description: "Un pequeño proyecto diseñado inicialmente por Mr. Web Designer en Html y Css y al que posteriormente le agregué mas funcionalidades con ReactJs.",
        url: "projects/BurgerWebSite.PNG",
        technologies: [
            {name: "Reactjs"},
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "Eatable",
        description: "Aplicación ligera centrada en la búsqueda y clasificación de distintas delicias culinarias. Dispone de un sistema de cuentas por lo que es necesario registrarse previamente.",
        url: "projects/Eatable.PNG",
        technologies: [
            {name: "Reactjs"},
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "Expensable",
        description: "Aplicación desarrollada junto a mis compañeros de Codeable. Su objetivo principal es facilitar la gestión de ingresos y gastos en diversas categorías que el usuario puede crear a voluntad.",
        url: "projects/Expensable.PNG",
        technologies: [
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "Somesplah",
        description: "Proyecto que busca funcionar a modo de librería de imágenes. El usuario agrega una categoría inicial, descripción y portada para posteriormente agregar imágenes relacionadas al tópico.",
        url: "projects/Somesplash.PNG",
        technologies: [
            {name: "Ruby"},
            {name: "Rails"},
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "Critics",
        description: "Plataforma que organiza diversas series y películas para posteriormente darle al usuario la libertad de calificarlas y criticarlas. Posee un sistema a nivel roles para el administrador y el usuario común por lo que registrar una cuenta es necesario.",
        url: "projects/Critics.PNG",
        technologies: [
            {name: "Ruby"},
            {name: "Rails"},
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "Tweetable",
        description: "Como su nombre lo indica es un proyecto que diseñe con el fin de emular la estructura de tema, comentario y comentario del comentario que posee Twitter.",
        url: "projects/Tweetable.PNG",
        technologies: [
            {name: "Ruby"},
            {name: "Rails"},
            {name: "HTML5"},
            {name: "CSS"},
        ]
    },{
        title: "SpaceGame",
        description: "Proyecto sencillo que encontré mientras navegaba por Internet. Me resulto bastante atractivo pues hasta ese entonces desconocía todo el potencial que podían llegar a tener los canvas de HTML.",
        url: "projects/ParticleGame.PNG",
        technologies: [
            {name: "HTML5"},
            {name: "CSS"},
            {name: "Javascript"}
        ]
    },{
        title: "Pokemon",
        description: "A quién no le gusta Pokemon... a mi me fascina. Este proyecto de consola lo realicé en mis inicios de Ruby y le guardo tanto cariño que me resultaba doloroso no ponerlo acá. Te permite poseer tu propio pokemon, pelear contra otros maestros y retar a líderes de gimnasio a fin de progresar. El sistema de elementos también ha sido agregado por lo que deberás escoger sabiamente a tus oponentes.",
        url: "projects/Pokemon.PNG",
        technologies: [
            {name: "Ruby"}
        ]
    }

]

const GlobalContext = createContext();
const GlobalProvider = ({children}) => {
    const [sideMenuActive, setSideMenuActive] = useState(false);
    const [currentPage, setCurrentPage] = useState("home")
    const [animation, setAnimation] = useState(""); // interference
    const [waitTime, setWaitTime] = useState(3000);
    const [globalSkills, setGlobalSkills] = useState(skills);
    const [globalProjects, setGlobalProjects] = useState(projects);
    const {pathname} = useLocation();

    useTimeout(() => {
        if(animation === ""){
            setAnimation("interference")
            setWaitTime( randomBetween(1000, 3000) );
        }else{
            setAnimation("")
            setWaitTime( randomBetween(10000, 15000) );
        }
    }, waitTime)

    useEffect(() => {
        setCurrentPage(pathname.slice(1));
    }, [pathname])

    return (
        <GlobalContext.Provider value={{
            sideMenuActive,
            setSideMenuActive,
            currentPage,
            setCurrentPage,
            animation,
            globalSkills,
            globalProjects,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export {GlobalProvider, useGlobalContext};