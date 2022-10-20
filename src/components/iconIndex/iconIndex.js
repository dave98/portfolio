import { AngularIcon, JavascriptIcon, MongodbIcon, NestIcon, NextjsIcon, NpmIcon, PostgresIcon, PythonIcon, RailsIcon, ReactIcon, ReactNativeIcon, RubyIcon, SequelizeIcon, VueIcon } from "../brandedIcons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"

export const Icons = {
    "html5": {
        normal: <FontAwesomeIcon icon={faHtml5}/>,
        filled: <FontAwesomeIcon icon={faHtml5} color={"#000"}/>,
    },
    "css": {
        normal: <FontAwesomeIcon icon={faCss3}/>,
        filled: <FontAwesomeIcon icon={faCss3} color="#000"/>,
    },
    "reactjs": {
        normal: <ReactIcon/>,
        filled: <ReactIcon filled="#000"/>,
    },
    "javascript": {
        normal: <JavascriptIcon/>,
        filled: <JavascriptIcon filled="#000"/>,
    },
    "nextjs": {
        normal: <NextjsIcon/>,
        filled: <NextjsIcon filled="#000"/>,
    },
    "vue": {
        normal: <VueIcon/>,
        filled: <VueIcon filled="#000"/>,
    },
    "angular": {
        normal: <AngularIcon/>,
        filled: <AngularIcon filled="#000"/>,
    },
    "npm": {
        normal: <NpmIcon/>,
        filled: <NpmIcon filled="#000"/>,
    },

    "ruby": {
        normal: <RubyIcon/>,
        filled: <RubyIcon filled="#000"/>,
    },
    "mongodb": {
        normal: <MongodbIcon/>,
        filled: <MongodbIcon filled="#000"/>,
    },
    "postgresql": {
        normal: <PostgresIcon/>,
        filled: <PostgresIcon filled="#000"/>,
    },
    "nestjs": {
        normal: <NestIcon/>,
        filled: <NestIcon filled="#000"/>,
    },
    "python": {
        normal: <PythonIcon/>,
        filled: <PythonIcon filled="#000"/>,
    },
    "rails":{
        normal: <RailsIcon/>,
        filled: <RailsIcon filled="#000"/>,
    },
    "sequelize": {
        normal: <SequelizeIcon/>,
        filled: <SequelizeIcon filled="#000"/>,
    }, 

    "reactnative": {
        normal: <ReactNativeIcon/>,
        filled: <ReactNativeIcon filled="#000"/>
    }
}