import { colors } from "../../styles/colors";
import { Center } from "../svgEffects";
import Heading from "../typography/heading";
import { Container } from "./styles";

export default function PageTitle({children}){
    return (
        <Container>
            <Center horizontalDeformation="center" verticalDeformation="top" height={20} width={"30%"}/>
            <Heading
                size="md"
                textTransform="uppercase"
                letterSpacing={6}
                weight={500}
                color={colors.fonts.white}
            >
                {children}
            </Heading>
            <Center horizontalDeformation="center" verticalDeformation="bottom" height={20} width={"30%"}/>
        </Container>
    )
}