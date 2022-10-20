import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { randomBetween } from "../../common"
import { colors } from "../../styles/colors"

const backgroundAnimation = keyframes({
    "0%": {
        backgroundPositionY: 0
    },
    "100%": {
        backgroundPositionY: 60,
    }
})

function glitch(intensity, color){
    let buildingGlitch = {};
    let step = parseInt(100 / intensity)
    for(let i = 0; i < 100; i+=step){
        buildingGlitch[`${i}%`] = {
            clipPath: `var(--slice-${ parseInt(randomBetween(2, intensity+2))})`,
            backgroundColor: color,
            transform: `translate(${randomBetween(-20, 20)}%, ${randomBetween(-20, 20)}%)`
        }
    }
    return keyframes(buildingGlitch);
}

function glitchEffect(color, intensity){
    let buildingGlitch = {
        position: "absolute",
        content: `""`,
        inset: 0,
        zIndex: 100,
        "--slice-1: ": "inset(25% 25% 25% 25%)",
        clipPath: "var(--slice-1)",
        animationName: glitch(intensity, color),
        animationDuration: "1s",
        animationTimingFunction: "steps(2, end)",
        animationIterationCount: "infinite",
        backgroundColor: "transparent"
    };
    for(let i = 2; i < intensity + 2; i++){
        let horizontalStart = randomBetween(10, 90);
        let verticalStart = randomBetween(10, 90);
        let glitchHeight = randomBetween(1, 4)
        let glitchWidth = randomBetween(10, 90)
        buildingGlitch[`--slice-${i}`] = `inset(${horizontalStart}% ${verticalStart}% calc(${100 - horizontalStart}% - ${glitchHeight}px)  ${100 - verticalStart - glitchWidth}%)`
    }
    return css(buildingGlitch);
}

export const SectionFade = styled.div({
    position: "relative",
    width: "100%",
    height: "65vh",
})

export const SectionEffect = styled.div({
    position: "relative",
    width: "100%",
    height: "100%",
    transitionDuration: "0s",
    transitionDelay: "0s",
    borderWidth: 1,
    borderLeftWidth: 5,
    borderStyle: "solid",
    borderColor: colors.background.mainWhite,
    clipPath: "polygon(calc(100% - 70px) 0, 100% 70px, 100% calc(100% - 70px), calc(100% - 70px) 100%, 0 100%, 0 0)",
    backgroundColor: "transparent",
    "&.interference": {
        ":before": glitchEffect("gray", 5),
        ":after": glitchEffect("black", 30),
    }
})

export const Section = styled.div({
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    display: "flex",
    flexDirection: "row",
    overflowY: "visible",
    overflowX: "hidden",
    transitionDuration: "0s",
    transitionDelay: "0s",

    backgroundSize: "60px 60px",
    backgroundImage: "repeating-linear-gradient(0deg, rgba(150, 150, 150, 0.3), rgba(150, 150, 150, 0.3) 1px, rgba(80, 80, 80, 0.15) 1px, rgba(80, 80, 80, 0.15))",
    animationName: backgroundAnimation,
    animationDuration: "5s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
})

export const Container = styled.div( ({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0, 
    right:0,
    display: "flex",
    flexDirection: "row",
    transitionDuration: "1s",
    backgroundColor: "transparent",
}), ({displaced, direction}) => (
    function(){
        if(!displaced){
            return {
                left:  direction === "right" ? "0%" : "-50%",
                right: direction === "right" ? "0%" : "50%",
            }
        }else{
            return {
                left:  direction === "right" ? "-50%" : "0%", // From right (not to right)
                right: direction === "right" ? "50%" : "0%",
            }
        }
    }
))

export const TopicSegment = styled.div({
    position: "relative",
    flex: "50%",
    minWidth: "50%",
    maxWidth: "50%",
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 10%",
    textAlign: "center",
})

export const TopicDescription = styled.div({
    zIndex: 20,
    maxHeight: "50%",
    overflowY: "scroll",
    paddingRight: 20,
})

export const PlanetSegment = styled.div({
    position: "relative",
    flex: "50%",
    minWidth: "50%",
    maxWidth: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const TechSegment = styled.div({
    flex: "50%",
    minWidth: "50%",
    maxWidth: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30, 
    justifyContent: "center",
    alignItems: "center",
    padding: "0 70px",
    textAlign: "justify",
})