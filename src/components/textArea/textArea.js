import { Container } from "./styles";

export default function TextArea({name, placeholder, value, onChange}){

    function handleChange(val){
        onChange(val.target.value)
    }

    return (
        <Container 
            name={name} 
            id={name} 
            placeholder={placeholder}
            rows={7}
            value={value}
            onChange={handleChange}
        />
    )
}