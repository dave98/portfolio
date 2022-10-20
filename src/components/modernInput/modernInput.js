import { Container, Input, InputBorder, Label, LetterSpan } from "./style";

export default function ModernInput({
    type,
    name,
    placeholder = "",
    value,
    onChange
}){
    
    function handleChange(val){
        onChange(val.target.value)
    }

    return (
        <Container>
            <Input type={type || "text"} name={name} required value={value} onChange={handleChange}/>
            <Label>
                {
                   placeholder.split("").map((l, idx) => (
                        <LetterSpan 
                            key={idx}
                            transitionDelay={idx * 50}
                            >
                                {l}
                            </LetterSpan>
                   )) 
                }
            </Label>
            <InputBorder 
                className="input-border"
                transitionDelay={placeholder.length * 50}
            />
        </Container>
    )
}