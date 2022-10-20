import {useLocation} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, } from '@fortawesome/free-solid-svg-icons'
import Heading from "../typography/heading";
import { Container, Toggler } from "./styles";
import { colors } from "../../styles/colors";


export default function TopBar({active, onTogglerClick}){
    const location = useLocation().pathname;
    return (
        <Container className={active ? "active" : null}>
            <Heading
                size="sm"
                weight="500"
                color={colors.fonts.darkGray}
                textTransform="uppercase"
                letterSpacing={4}
            >
                {location.slice(1, location.length)}
            </Heading>
            <Toggler onClick={onTogglerClick}>
                <FontAwesomeIcon icon={faBars}/>
            </Toggler>
        </Container>
    )
}