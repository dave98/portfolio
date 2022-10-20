import { Container, NGround, Subtitle, Surrounder } from "./style";

export default function AnimatedIcon({name,icon}){
    return (
        <Surrounder>
            <Container>
                <NGround>{icon}</NGround>
                <NGround>{icon}</NGround>
                <NGround>{icon}</NGround>
                <NGround>{icon}</NGround>
            </Container>
            <Subtitle>{name}</Subtitle>
        </Surrounder>
    )
}