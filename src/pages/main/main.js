import { Container} from "./style";
import { useGlobalContext } from "../../contexts/global-context";
import {Routes, Route} from "react-router-dom"
import Home from "../home/home";
import About from "../about";
import Service from "../service";
import Projects from "../projects";
import Contact from "../contact";
import TopBar from "../../components/topbar/topbar";
import AnimatedBackground from "../../components/animatedBackground";
import { useEffect, useState } from "react";

export default function Main(){
    const {sideMenuActive, setSideMenuActive} = useGlobalContext();
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {        
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [])

    function handlingTogglerClick(){
        setSideMenuActive(!sideMenuActive)
    }

    return (
        <Container className={sideMenuActive ? "active" : null}> 
            
            <TopBar 
                active={sideMenuActive}
                onTogglerClick={handlingTogglerClick}
            />

            <AnimatedBackground
                height={height}
                width={width}
            />
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Service/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Container>
 )
}