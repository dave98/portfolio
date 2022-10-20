import { Container } from "./styles";

export default function TextArea({name, placeholder }){
    return (
        <Container 
            name={name} 
            id={name} 
            placeholder={placeholder}
            rows={7}
        />
    )
}