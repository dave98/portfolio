import { Circles, Container, Satellite, Topic } from "./styles";
import Heading from "../typography/heading";
import { colors } from "../../styles/colors";
import { useMemo } from "react";
import { Icons } from "../iconIndex/iconIndex";
import { Corner } from "../svgEffects";

const orbitTime = 15;

 export default function Planet({title, icon, technologies = [], onTopicClick, onTechClick, displaced}){
    return (
        // Avoids animation restart when a different tech is selected.
        // OnTechClick cannot be changed 
            <Container>
                <Corner vertical="top" horizontal="left"/>
                <Corner vertical="top" horizontal="right"/>
                <Topic 
                    className={`with-cursor`}
                    onClick={onTopicClick}
                >
                    {icon}
                    <Heading
                        size={"xs"}
                        weight={500}
                        color={colors.fonts.white}
                        letterSpacing={1}
                    >
                        {title}
                    </Heading>
                    <Circles className={displaced ? "displaced" : ""}>
                        <circle cx={"50%"} cy={"50%"} r={"44%"} fill={"none"} stroke={"white"} strokeWidth={"4%"} strokeDasharray={"50 10 20"}/>
                        <circle cx={"50%"} cy={"50%"} r={"47%"} fill={"none"} stroke={"white"} strokeWidth={"3%"} />
                        <circle cx={"50%"} cy={"50%"} r={"48%"} fill={"none"} stroke={"white"} strokeWidth={"4%"} strokeDasharray={"100 100"}/>
                    </Circles>
                </Topic> 
                {
                    useMemo(() => (
                            technologies.length ?
                                technologies.map((t, idx) => (
                                    <Satellite
                                        className="with-cursor"
                                        onClick={() => {onTechClick(t)}}
                                        key={idx}
                                        size={60}
                                        orbitDistance={Math.random() * (250 - 225 + 1) + 225}
                                        orbitTime={orbitTime}
                                        order={idx}
                                        techSize={technologies.length}
                                    >
                                        {Icons[t.name.toLowerCase()].filled}
                                    </Satellite>
                                ))
                                : null
                    ), [technologies])
                }
                <Corner vertical="bottom" horizontal="left"/>
                <Corner vertical="bottom" horizontal="right"/>
            </Container>
    )
 }