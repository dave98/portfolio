import styled from "@emotion/styled";
import { fonts } from "../../styles/typography";

export const Surrounder = styled.div({
    width: 70,
    height: 70,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

export const Container = styled.div({
    transform: "rotate(-15deg) skew(15deg)",
    transformStyle: "preserve-3d",
    position: "relative",
    listStyle: "none",
    width: 45,
    height: 45,
    backgroundColor: "transparent",

    "span:nth-of-type(4)": {
        opacity: 1,
    },

    ":hover span:nth-of-type(1)": {
        transform: "translate(0px, 0px)",
        opacity: .1,
    },
    ":hover span:nth-of-type(2)": {
        transform: "translate(4px, -7px)",  
        opacity: .4,
    },
    ":hover span:nth-of-type(3)": {
        transform: "translate(8px, -14px)",
        opacity: .7,
    },
    ":hover span:nth-of-type(4)": {
        transform: "translate(12px, -21px)",
        opacity: 1,
    },

})

export const NGround = styled.span({
    position: "absolute",
    top: 0, 
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "0.1s ease-in",
    transitionProperty: "transform, opacity"
})

export const Subtitle = styled.h5({
    fontFamily: fonts.secondary,
    fontWeight: 400,
    letterSpacing: 1.5,
    fontSize: 10,
})
