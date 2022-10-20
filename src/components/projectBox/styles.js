import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "relative",
    overflow: "hidden",
    ":hover": {
        ".imgBox": {
            transform: "translateY(-100%)",
        },
        ".textBox": {
            transform: "translateY(0%)",
        }
    }
})

export const ImgBox = styled.div({
    position: "relative",
    width: "100%",
    height: "100%",
    transform: "translateY(0)",
    transition: "0.5s ease-in-out",
    "img": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})

export const TextBox = styled.div({
     position: "absolute",
     top: 0, 
     left: 0,
     width: "100%",
     height: "100%",
     backgroundColor: colors.background.mainBlack,
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     transform: "translateY(100%)",
     transition: "0.5s ease-in-out",
})