import { useEffect, useState } from "react";
import AnimatedBackground from "../../components/animatedBackground";
import ModernButton from "../../components/modernButton";
import ModernInput from "../../components/modernInput";
import PageTitle from "../../components/pageTitle/pageTitle";
import { Corner } from "../../components/svgEffects";
import TextArea from "../../components/textArea/textArea";
import { ContactForm, Container } from "./styles";

export default function Contact(){

    return (
        <Container>
            <PageTitle>Contáctame</PageTitle>
            
            <ContactForm data-aos="fade-up">
                    <ModernInput name="name" placeholder="Name"/>
                    <ModernInput type="email" name="email" placeholder="Email address" />
                    <ModernInput name="phone" placeholder="Mobile number"/>
                    <ModernInput name="subject" placeholder="Subject"/>
                    <TextArea name="message" placeholder="Message"/>
                    <ModernButton
                        textTransform={"uppercase"}
                    >
                        Submit
                    </ModernButton>
            </ContactForm>

        </Container>
    )
} 