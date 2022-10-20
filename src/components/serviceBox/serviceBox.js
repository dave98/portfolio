import { colors } from "../../styles/colors";
import Heading from "../typography/heading";
import Text from "../typography/text";
import { Container, Image } from "./style";

export default function ServiceBox({imageURL, title, description}){
    return (
        <Container>
            <Image src={imageURL}/>
            <Heading
                size={"sm"}
                weight={500}
                letterSpacing={4}
                textTransform="uppercase"
                color={colors.fonts.white}
            >
                {title}
            </Heading>
            <Text
                size={"xs"}
                color={colors.fonts.white}
            >
                {description}
            </Text>
        </Container>
    )
}