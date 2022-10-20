import { Container } from "./styles";

export default function Button({
    size,
    buttonType,
    children,
    onClick,
    textTransform,
}){
    return (
        <Container
            size={size}
            buttonType={buttonType}
            onClick={onClick}
            textTransform={textTransform}
        >
            {children}
        </Container>
    )
}