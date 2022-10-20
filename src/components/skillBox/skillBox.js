import {useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/global-context";
import { colors } from "../../styles/colors";
import Planet from "../planet";
import { Corner } from "../svgEffects";
import TechBox from "../techBox/techBox";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { Container, PlanetSegment, Section, SectionEffect, SectionFade, TopicDescription, TopicSegment } from "./style";

export default function SkillBox({title, icon, description, technologies = [], reversed}){
    const {animation} = useGlobalContext();
    const [selectedTech, setSelectedTech] = useState(null);
    const [displayedTech, setDisplayedTech] = useState(null);
    const [displaced, setDisplaced] = useState(false);

    function handleTopicClick(){
        setSelectedTech(null)
    }

    function handleTechClick(val){
        setSelectedTech(val)
    }

    useEffect(() => {
        if(selectedTech){
            setDisplayedTech(selectedTech)
            setDisplaced(true)
        }else{
            setSelectedTech(false)
            setDisplaced(false)
        }
    }, [selectedTech])

    return (
        <SectionFade data-aos={"fade-up"}>
            <SectionEffect className={animation}>
                <Section>
                    {
                        !reversed ?
                            <Container displaced={displaced}  direction="right">
                                <TopicSegment>
                                    <Corner vertical="top" horizontal="left"/>
                                    <Heading
                                        size={"md"}
                                        weight={400}
                                        letterSpacing={2}
                                        color={colors.fonts.white}
                                    >
                                        {title}
                                    </Heading>
                                    <TopicDescription>
                                        <Text
                                            size={"sm"}
                                            letterSpacing={0.5}
                                            weight={300}
                                            color={colors.fonts.white}
                                        >
                                            {description}
                                        </Text>
                                    </TopicDescription>
                                    <Corner vertical="bottom" horizontal="right"/>
                                </TopicSegment>
                                
                                <PlanetSegment>
                                    <Corner vertical="top" horizontal={!reversed ? "right" : "left"}/>
                                    <Planet 
                                        title={title} 
                                        icon={icon} 
                                        technologies={technologies}
                                        onTopicClick={handleTopicClick}
                                        onTechClick={handleTechClick}
                                        displaced={displaced}
                                    />
                                    <Corner vertical="bottom" horizontal={!reversed ? "left" : "right"}/>
                                </PlanetSegment>
                                
                                <TechBox
                                    title={displayedTech?.name}
                                    description={displayedTech?.description}
                                    progress={displayedTech?.progress}
                                    direction="right"
                                />
                            </Container>
                        :
                            <Container displaced={displaced}  direction="left">
                                <TechBox
                                    title={displayedTech?.name}
                                    description={displayedTech?.description}
                                    progress={displayedTech?.progress}
                                    direction="left"
                                />

                                <PlanetSegment>
                                    <Corner vertical="top" horizontal={!reversed ? "right" : "left"}/>
                                    <Planet 
                                        title={title} 
                                        icon={icon} 
                                        technologies={technologies}
                                        onTopicClick={handleTopicClick}
                                        onTechClick={handleTechClick}      
                                        displaced={displaced}
                                    />
                                    <Corner vertical="bottom" horizontal={!reversed ? "left" : "right"}/>
                                </PlanetSegment>
                                
                                <TopicSegment>
                                    <Corner vertical="top" horizontal="right"/>
                                    <Heading
                                        size={"md"}
                                        weight={400}
                                        letterSpacing={2}
                                        color={colors.fonts.white}
                                    >
                                        {title}
                                    </Heading>
                                    <TopicDescription>
                                        <Text
                                            size={"sm"}
                                            letterSpacing={0.5}
                                            weight={300}
                                            color={colors.fonts.white}
                                        >
                                            {description}
                                        </Text>
                                    </TopicDescription>
                                    <Corner vertical="bottom" horizontal="left"/>
                                </TopicSegment>
                            </Container>
                    }
                </Section>
            </SectionEffect>
        </SectionFade>
        )
}