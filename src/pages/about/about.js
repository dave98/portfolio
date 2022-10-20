import { FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3, faBootstrap, faAngular, faAws, faJava  } from "@fortawesome/free-brands-svg-icons"; 
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { colors } from "../../styles/colors";
import { Container, Content, IncomingSkill, IncomingSkillContainer, IncomingSkillMainContainer, Separator, Skill, SkillBox, TextBox } from "./style";
import PageTitle from "../../components/pageTitle/pageTitle";
import HorizontalProgressBar from "../../components/horizontalProgressBar/horizontalProgressBar";
import { Center, Corner } from "../../components/svgEffects";
import { useGlobalContext } from "../../contexts/global-context";
import { useEffect, useState } from "react";
import { randomBetween } from "../../common";

const incomingSkills = [
    {
        name: "Angular",
        icon: <Icon icon={faAngular}/>,
        progress: 90,
    },{
        name: "Flutter",
        icon: <Icon icon={faMobileScreen}/>,
        progress: 60,
    },{
        name: "AWS",
        icon: <Icon icon={faAws}/>,
        progress: 60,
    },{
        name: "Spring",
        icon: <Icon icon={faJava}/>,
        progress: 85,
    },
]

const nSkills = 4;
export default function About() {    
    const {globalSkills, animation} = useGlobalContext();
    const [displayedSkills, setDisplayedSkills] = useState([]);
    let TECHS_INTERVAL = null;


    function chooseTech(){
        let tSkills = new Map();
        while(tSkills.size < nSkills){
            let topic = parseInt(randomBetween(0, globalSkills.length - 1))
            let tSkill = globalSkills[topic].technologies[ parseInt( randomBetween(0, globalSkills[topic].technologies.length-1))];
            tSkills.set(tSkill.id, tSkill)
        }
        setDisplayedSkills(Array.from(tSkills.values()));
    }

    useEffect(() => {
        chooseTech();
        TECHS_INTERVAL = setInterval(() => {
            chooseTech();
        }, 20000);

        return () => {
            clearInterval(TECHS_INTERVAL);
        }
    }, [])

    return (
        <Container>
            <PageTitle>Acerca de mí</PageTitle>

            <Content>
                <TextBox data-aos={"fade-right"}>
                    <Corner horizontal="left" vertical="top"/>
                    <Text
                        size={"sm"}
                        weight={300}
                        letterSpacing={1}
                    >
                        Hey hola, soy Dave. Entusiasta del Frontend y apasionado del Backend.<br/>
                        Soy de aquellos que exageran en la concentración, capaz de resolver cualquier problema y sin temor a lanzarse por nuevas tecnologías. <br/>
                        Si bien me considero un desarrollador de amplio espectro no tengo problemas con centrarme en solo un aspecto, tanto si es exclusivamente en Front como en Back.
                    </Text>
                    <Button
                        buttonType={"line"}
                    >More about me ⇨</Button>
                    <Corner horizontal="right" vertical="bottom"/>
                </TextBox>

                <SkillBox data-aos={"fade-left"}>
                    <Heading
                        size="sm"
                        weight={400}
                        letterSpacing={3}
                    >
                        Algunas de las tecnologías que conozco...
                    </Heading>
                    {
                        displayedSkills.map((s, idx) => (
                            <Skill
                                key={idx}
                            >
                                <Text
                                    size={"xs"}
                                    weight={300}
                                    letterSpacing={3}
                                    >{s.name}</Text>
                                <HorizontalProgressBar progress={s.progress} icon={s.name.toLowerCase()}/>
                            </Skill>
                        ))
                    }
                </SkillBox>
            </Content>
            
           <Separator data-aos={"fade-up"}>
             <Center horizontalDeformation="center" verticalDeformation="bottom" height={30}/>
           </Separator>
            
            <IncomingSkillMainContainer>
                <Heading
                    size="sm"
                    textTransform="uppercase"
                    letterSpacing={10}
                    weight={500}
                    color="inherited"
                    data-aos={"fade-up"}
                >
                    Habilidades a futuro
                </Heading>
                <Text
                    size="sm"
                    letterSpacing={2}
                    color={"inherited"}
                    weight={300}
                    data-aos={"fade-up"}
                >
                   Como S. Johnson diría, el cambio constante gobierna el mundo. Uno simplemente no se puede quedar en su zona de confort.
                </Text>
                <IncomingSkillContainer data-aos={"fade-up"}>
                    {
                        incomingSkills.map((s, idx) => (
                            <IncomingSkill key={idx}>
                                {
                                    s.icon
                                }
                                <Heading 
                                    size="xs"
                                    weight={400}
                                    textTransform="uppercase"
                                    color={colors.fonts.white}
                                >
                                    {s.name}
                                </Heading>
                            </IncomingSkill>
                        ))
                    }
                </IncomingSkillContainer>
            </IncomingSkillMainContainer>
        </Container>
    )
}

