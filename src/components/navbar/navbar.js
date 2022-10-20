import { useGlobalContext } from "../../contexts/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faCode, faCodeBranch, faFolderOpen, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Container, ListItem, UListContainer } from "./style";
import {Link} from "react-router-dom"
import Heading from "../typography/heading";
import { colors } from "../../styles/colors";
import { useEffect } from "react";

const navBarOptions = [
    {
        name: "home",
        slugName: "Inicio",
        icon: <FontAwesomeIcon icon={faCircleNodes}/>,
    },{
        name: "about",
        slugName: "Quién soy",
        icon: <FontAwesomeIcon icon={faUserSecret}/>,
    },{
        name: "skills",
        slugName: "Habilidades",
        icon: <FontAwesomeIcon icon={faCode}/>,
    },{
        name: "projects",
        slugName: "Proyectos",
        icon: <FontAwesomeIcon icon={faFolderOpen}/>,
    },{
        name: "contact",
        slugName: "Contacto",
        icon: <FontAwesomeIcon icon={faCodeBranch}/>,
    }]

export default function Navbar(){
    const {sideMenuActive, currentPage, setCurrentPage} = useGlobalContext();

    function handleItemClick(val){
        setCurrentPage(val)
    }

    return (
        <Container className={sideMenuActive ? "active" : null}>
            <UListContainer>
                {
                    navBarOptions.map((o, index) => (
                        <ListItem 
                            key={index}
                            className={currentPage == o.name ? "active-option" : ""}
                        >
                            <Link 
                                onClick={() => {handleItemClick(o.name)}}
                                to={`/${o.name}`}
                            >
                                {o.icon}
                                <Heading
                                    textTransform="uppercase"
                                    size="sm"
                                    weight="500"
                                    color={colors.fonts.darkGray}
                                >
                                    {o.slugName}
                                </Heading>
                            </Link>
                        </ListItem>
                    ))
                }
            </UListContainer>
        </Container>       
    )
}