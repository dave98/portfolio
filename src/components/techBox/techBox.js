import { Fragment, useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import CircularProgressBar from "../circularProgressBar/circularProgressBar";
import { Center, Corner } from "../svgEffects";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { Container, DescriptionContainer, Header, MainContainer } from "./style";

export default function TechBox({
    title, 
    description,
    progress,
    direction,
}){
    const [dTitle, setDTitle] = useState(null);
    const [dDescription, setDDescription] = useState(null)
    const [dProgress, setDprogress] = useState(null)
    const [animation, setAnimation] = useState("");
    //let DELAYER = null;

    useEffect(() => {
        setAnimation("closing")
        setTimeout(() => {
            setAnimation("appearing")
            setDTitle(title)
            setDDescription(description)
            setDprogress(progress);
        }, 750);

        // Animation sudden cut
        //return () => {
        //    clearTimeout(DELAYER)
        //}
    }, [title])

    return (
        <MainContainer 
            directionOrigin={direction}
            className={animation}
        >
            <Corner vertical="top" horizontal={direction === "left" ? "right" : "left"}/>
            <Container className={animation}>
                <Header>
                    {
                        direction === "left" ?
                            <Fragment>
                                <CircularProgressBar
                                    icon={dTitle?.toLowerCase()}
                                    percentaje={dProgress}
                                />
                                <Heading
                                    size={"md"}
                                    weight={400}
                                    letterSpacing={4}
                                    color={colors.fonts.white}
                                >
                                    {dTitle}
                                </Heading>
                            </Fragment>
                        : 
                            <Fragment>
                                <Heading
                                    size={"md"}
                                    weight={400}
                                    letterSpacing={4}
                                    color={colors.fonts.white}
                                >
                                    {dTitle}
                                </Heading>
                                <CircularProgressBar
                                    icon={dTitle?.toLowerCase()}
                                    percentaje={dProgress}
                                />
                            </Fragment>
                    }
                </Header>
                <Center horizontalDeformation={direction} verticalDeformation="top"/>
                <DescriptionContainer>
                    <Text
                        size={"xs"}
                        letterSpacing={1}
                        weight={300}
                        color={colors.fonts.white}
                    >
                        {dDescription}
                    </Text>
                </DescriptionContainer>
                <Center horizontalDeformation={direction} verticalDeformation="bottom"/>
            </Container>
            <Corner vertical="bottom" horizontal={direction}/>
        </MainContainer>
    )
}