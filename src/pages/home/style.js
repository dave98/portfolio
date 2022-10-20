import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5% 10%",
    backgroundColor: "transparent",
    gap: 100,
})


export const Presentation = styled.div({
    display: "flex",
    width: "50%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 15,
    textAlign: "justify"
})

export const PresentationHeader = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

})

export const DaveImage = styled.img({
    position: "absolute",
    inset: "7%",
    height: "87%",
    width: "87%",
    objectFit: "cover",
})

export const DavePodium = styled.div({
    position: "relative",
    height: "90%",
    width: "50%",

    ":hover": {
        ".inner-glass": {
            fill: "rgba(255, 255, 255, 0.2)"
        },
        ".inner-circle, .inner-cross": {
            transform: "translateY(-24px)"
        },
        ".outer-circle-1": {
            transform: "translateY(-24px)"
        },
        ".outer-circle-2": {
            transform: "translateY(-17px)"
        },
        ".outer-circle-3": {
            transform: "translateY(-11px)",
            strokeDashoffset: "40%"
        },
        ".outer-circle-4": {
            transform: "translateY(-6px)"
        },
        ".outer-circle-5": {
            strokeDashoffset: "-20%"
        },

    }
})

export const WindowContainer = styled.div({
    width: "100%",
    height: "80%",
    position: "absolute",
    top: "8%",
    left: 0,
})

export const PodiumContainer = styled.div({
    width: "60%",
    height: "45%",
    position: "absolute",
    top: "75%",
    left: "20%",
    opacity: .9,

    
})


