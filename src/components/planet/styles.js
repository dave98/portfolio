import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../styles/colors";

function orbit(radio, angulo){
    let posX = radio * Math.cos(angulo * Math.PI / 180);
    let posY = radio * Math.sin(angulo * Math.PI / 180)
 
    return keyframes({
        "0%": {
            transform: `translate(
                ${ posX }px, 
                ${ posY }px
                )`,
            zIndex: 1, 
        },
        "50%": {
            transform: `translate(
                ${ -1 * posX }px, 
                ${ -1 * posY }px
                )`,
            zIndex: 1, 
        },
        "50.00001%": {
            transform: `translate(
                ${ -1 * posX }px, 
                ${ -1 * posY }px
                )`,
            zIndex: 3, 
        },
        "100%": {
            transform: `translate(
                ${ posX }px, 
                ${ posY }px
                )`,
            zIndex: 3, 
        }
    })
}

export const Container = styled.div({
    position: "relative",
    width: "30vh",
    height: "30vh",
})

export const Topic = styled.div({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "transparent",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "25% 25%",
    textAlign: "center",
    backdropFilter: "blur(15px)",
})

export const Circles = styled.svg({
    zIndex: 2,
    position: "absolute",
    inset: 0,
    height: "100%",
    width: "100%",
    "circle": {
        transitionProperty: "all",
        transitionDuration: "1s",
        transitionTimingFunction: "cubic-bezier(.35,-0.74,.61,1.62)"
    },
    "circle:nth-of-type(1)":{
        strokeWidth: "12%",
    },

    ":hover": {
        "circle:nth-of-type(1)": {
            strokeWidth: "12%",
        },
    },
    "&.displaced": {
        "circle:nth-of-type(1)": {
            strokeWidth: "6%",
            strokeDashoffset: "-35%",
        },
        "circle:nth-of-type(3)": {
            strokeDashoffset: "-60%",
        }
    }
})

export const Satellite = styled.span(({size, orbitDistance, orbitTime, order, techSize}) => ({
    position: "absolute",
    top: `calc(50% - ${size/2}px)`,
    left: `calc(50% - ${size/2}px)`,
    width: size,
    height: size,
    borderRadius: "50%",
    animationName: orbit(orbitDistance,  order * (180 / techSize) ),
    animationDuration: `${orbitTime}s`,
    animationDelay:  `-${ order * (orbitTime / techSize) }s`,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    backgroundColor: colors.background.mainWhite,
    padding: "10px 10px",
    transitionDuration: "0.3s",
    "svg": {
        height: "100%",
        width: "100%",
        borderRadius: "50%",
    },
    ":hover": {
        boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.5)",
        "svg": {
            borderRadius: "0%",
        }
    },
    ":active": {
        "svg": {
            transform: "scale(0.7)",
        }
    }
}))
