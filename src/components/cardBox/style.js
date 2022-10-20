import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div(({height, rotationAxis}) => ({
    cursor: "pointer",
    height: height,
    opacity: 0.85,
    transition: "all 1.5s",

    ":hover .content,  .axised": {
        transform: `rotate${rotationAxis}(0.5turn)`,

        ":before": {
            width: "40%",
            height: "40%",
            left: "1rem",
            top: "1rem",
            borderWidth: 2,
            borderColor: colors.background.mainWhite,
        },
        ":after": {
            width: "40%",
            height: "40%",
            right: "1rem",
            bottom: "1rem",
            borderWidth: 2,
            borderColor: colors.background.mainWhite
        },

        ".front .frontimage": {
            transition: "all 1s",
            filter: "blur(6px)",
            opacity: 0.35,
        }
    },
}))

export const Content = styled.div({
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "center",
    position: "relative",
    transition: "all .5s ease-in-out",
    transformStyle: "preserve-3d",

    ":before": {
        content: `""`,
        position: "absolute",
        width: "20%",
        height: "20%",
        left: "0rem",
        top: "0rem",
        borderTop: `1.5px solid ${colors.background.darkGray}`,
        borderLeft: `1.5px solid ${colors.background.darkGray}`,
        transition: ".6s ease-in",
        transitionProperty: "width, height, left, top, border-color",
    },
    ":after": {
        content: `""`,
        position: "absolute",
        width: "20%",
        height: "20%",
        right: "0rem",
        bottom: "0rem",
        borderBottom: `1.5px solid ${colors.background.darkGray}`,
        borderRight: `1.5px solid ${colors.background.darkGray}`,
        transition: ".6s ease-in",
        transitionProperty: "width, height, right, bottom, border-color",
    }
    
})

export const Front = styled.div({
    position: "absolute",
    top: 5, 
    left: 5, 
    bottom: 0, 
    right: 0,
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    ".title": {
        transform: "translateZ(5rem)",
        backgroundColor: "transparent",
        backfaceVisibility: "hidden",
    },
})

export const FrontImage = styled.div({
    position: "relative",
    width: "calc(100% - 5px)",
    height: "calc(100% - 5px)",
    transform: "translateZ(2rem)",
    transition: "all 1s",

    "img": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})

export const Back = styled.div(({rotationAxis}) => ({
    position: "absolute",
    inset: 0,
    padding: "4rem 3rem",
    transformStyle: "preserve-3d",
    transform: `rotate${rotationAxis}(0.5turn)`,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    gap: "10%",
    zIndex: 10,
    transition: "all .5s",
    ".title": {
        transform: "translateZ(3rem)",
    },
    ".description": {
        transform: "translateZ(5rem)",
    }
}))

export const DescriptionContainer = styled.div({
    minHeight: "30%",
    maxHeight: "30%",
    overflowY: "scroll",
})

export const ButtonContainer = styled.div({
    padding: "0 25%",
    backfaceVisibility: "hidden",
    transform: "translateZ(3rem)",
})

export const TechContainer = styled.div({
    position: "absolute",
    bottom: "10%",
    left: 0,
    right: 0, 
    padding: "0 3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%", 
    backfaceVisibility: "hidden",
})