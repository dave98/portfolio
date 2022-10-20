import { useEffect, useState } from "react";
import ModernButton from "../../components/modernButton";
import ModernInput from "../../components/modernInput";
import PageTitle from "../../components/pageTitle/pageTitle";
import TextArea from "../../components/textArea/textArea";
import { ContactForm, Container } from "./styles";
import emailjs from "@emailjs/browser"
import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navigate = useNavigate();
    const [subject, setSubject] = useState("");
    const  [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            e.target, 
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log("Enviado correctament: ", result);
                navigate("/home")
            })
            .catch((error) => {
                console.log("Problemas al enviar: ", error);
            })
    }
    return (
        <Container>
            <PageTitle>Contáctame</PageTitle>
            
            <ContactForm data-aos="fade-up" onSubmit={sendEmail}>
                    <ModernInput name="subject" placeholder="Asunto" value={subject} onChange={setSubject}/>
                    <ModernInput name="name" placeholder="Nombre" value={name} onChange={setName}/>
                    <ModernInput name="email" placeholder="Dirección de correo" value={email} onChange={setEmail}/>
                    <ModernInput name="phone" placeholder="Número de teléfono" value={phone} onChange={setPhone}/>
                    <TextArea name="message" placeholder="Mensaje" value={message} onChange={setMessage}/>
                    <ModernButton
                        size={"sm"}
                        type="submit"
                        textTransform={"uppercase"}
                    >
                        Submit
                    </ModernButton>
            </ContactForm>

        </Container>
    )
} 

// service_x5ux20m
// from_name
// to_name
// message
/*
emailjs.send("service_xpl99ro","template_spiu47c",{
    message: "Tenemos una nueva tarea para ti",
    subject: "Testing Subject",
    name: "Dave Overstorben",
    email: "dave@gmail.com",
    phone: "914720207",
});
*/ 