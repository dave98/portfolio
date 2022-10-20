import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFreeCodeCamp, faCodepen } from "@fortawesome/free-brands-svg-icons";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { Container, DaveImage, DavePodium, PodiumContainer, Presentation, PresentationHeader, WindowContainer } from "./style";
import {Link} from "react-router-dom"
import { colors } from "../../styles/colors";
import Button from "../../components/button";
import CircularPodium from "../../components/circularPodium";
import Window from "../../components/window";
import React from "react";

export default function Home(){
    return (
        <Container>

                <Presentation>
                    <PresentationHeader>
                        <Heading
                            size="xxl"
                            weight={600}
                            letterSpacing={4}
                            textTransform={"uppercase"}
                            color={colors.fonts.white}
                        >
                            José David
                        </Heading>
                        <Text
                            size="sm"
                            letterSpacing={2}    
                            color={colors.fonts.darkGray}
                        >
                            (Alias Dave)
                        </Text>
                    </PresentationHeader>    

                    <Heading 
                        size="md"
                        weight={500}
                        color={colors.fonts.darkGray}
                        letterSpacing={3}
                    >
                        FullStack Web Developer
                    </Heading>
                    <Text
                        size={"xs"}
                        letterSpacing={1}
                        weight={300}
                        color={colors.fonts.white}
                    >
                        Hey hola, soy Dave. Entusiasta del Frontend y apasionado del Backend.<br/>
                        Soy de aquellos que exageran en la concentración, capaz de resolver cualquier problema y sin temor a lanzarse por nuevas tecnologías. <br/>
                        Si bien me considero un desarrollador de amplio espectro no tengo problemas con centrarme en solo un aspecto, tanto si es exclusivamente en Front como en Back.
                    </Text>
                </Presentation>
                
                <DavePodium>
                    <WindowContainer>
                        <Window width={"100%"} height={"100%"} doubleBorder>
                            <DaveImage src="user/dave.jpg"/>
                        </Window>
                    </WindowContainer>
                    <PodiumContainer>
                        <CircularPodium width={"100%"} height={"100%"}/>
                    </PodiumContainer>
                </DavePodium>


        </Container>
    )
}
 