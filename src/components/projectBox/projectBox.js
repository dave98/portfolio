import { colors } from "../../styles/colors";
import Heading from "../typography/heading";
import { Container, ImgBox, TextBox } from "./styles";

export default function ProjectBox({title, url}){
    return (
        <Container>
            <ImgBox className="imgBox">
                <img src={url} alt="project1"/>
            </ImgBox>
            <TextBox className="textBox">
                <Heading
                    color={colors.fonts.white}
                    textTransform="capitalize"
                >
                    {title}
                </Heading>
            </TextBox>
        </Container>       
    ) 
}
