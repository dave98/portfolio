import { ButtonDisplayer, Container } from "./styles";

export default function ModernButton({
    size,
    children,
    onClick,
    textTransform,
    transparent,
    type = "button"
}) {
    return (
        <Container
            size={size}
        >
            <ButtonDisplayer
                onClick={onClick}
                textTransform={textTransform}
                transparent={transparent}
                type={type}
                size={size}
            >
                {children}
            </ButtonDisplayer>
        </Container>
    )
}