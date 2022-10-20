import { ButtonDisplayer, Container } from "./styles";

export default function ModernButton({
    size,
    children,
    onClick,
    textTransform,
    transparent,
}) {
    return (
        <Container
            size={size}
        >
            <ButtonDisplayer
                onClick={onClick}
                textTransform={textTransform}
                transparent={transparent}
            >
                {children}
            </ButtonDisplayer>
        </Container>
    )
}