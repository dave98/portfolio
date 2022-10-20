import { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/colors";
import AnimatedIcon from "../animatedIcon/animatedIcon";
import ModernButton from "../modernButton";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { Back, ButtonContainer, Container, Content, DescriptionContainer, Front, FrontImage, TechContainer } from "./style";
import { Icons } from "../iconIndex/iconIndex";

export default function CardBox({title, description, url, height, technologies = []}){
    const [rotationAxis, setRotationAxis] = useState( Math.round(Math.random()) ? "X" : "Y" )
    const [isAxised, setIsAxised] = useState(false)
    let INTERVAL_TO_AXIS = null;

    useEffect(() => {
        let tTimeToAxis = isAxised 
            ? Math.floor(Math.random() * (8000 - 7000 + 1)  + 7000)
            :  Math.floor(Math.random() * (15000 - 2000 + 1)  + 2000)

        INTERVAL_TO_AXIS = setTimeout(() => {
            setIsAxised(!isAxised)
            if(!isAxised){
                setRotationAxis(Math.round(Math.random()) ? "X" : "Y")
            }
        }, tTimeToAxis);


        return () => {
            clearTimeout(INTERVAL_TO_AXIS);
        }
    }, [isAxised])

    return (
        <Container height={height} rotationAxis={rotationAxis}>
            <Content className={`content ${isAxised ? "axised" : ""}`}>
                
                <Front className="front">
                    <FrontImage className="frontimage">
                        <img src={url} alt={title} /> 
                    </FrontImage>
                </Front>

                <Back rotationAxis={rotationAxis}>
                    <Heading 
                            className="title"
                            size="sm"
                            color={colors.fonts.white}
                            weight={500}
                            letterSpacing={4}
                            textTransform="capitalize"
                        >
                            {title}
                        </Heading>
                        <DescriptionContainer>
                            <Text
                                className="description"
                                size={"xs"}
                                weight={300}
                                color={colors.fonts.white}
                            >
                                {description}
                            </Text>
                        </DescriptionContainer>

                        <ButtonContainer>
                            <ModernButton
                                size={"sm"}
                                transparent
                            >
                                Ir <Icon icon={faArrowUpRightFromSquare}/>
                            </ModernButton>
                        </ButtonContainer>


                        <TechContainer>
                            {
                                technologies.map((t, idx) => (
                                    <AnimatedIcon 
                                        name={t.name}
                                        icon={Icons[t.name.toLowerCase()].normal } 
                                        key={idx}
                                    />
                                ))
                            }
                        </TechContainer>

                </Back>
                
            </Content>
        </Container>
    )
}