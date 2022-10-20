import { Container } from "./style";

export default function Input({type, name, placeholder}){
    return(
        <Container
            type={type || "text"}
            name={name}
            id={name}
            placeholder={placeholder}
        />
    )
}