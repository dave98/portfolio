import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "fixed",
    width: 300,
    height: "100%",
    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: colors.background.mainBlack,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "width 0.5s",
    ":before": {
        content: `""`,
        position: "absolute",
        backgroundColor: colors.background.mainBlack,
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",  
        width: 1,
        top: 0,
        left: "calc(10% - 1px)",
        height: "30%",
        transitionProperty: "left",
        transitionDuration: ".5s",
        transitionDelay: ".5s",
    },
    ":after": {
        content: `""`,
        position: "absolute",
        backgroundColor: colors.background.mainBlack,
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",  
        width: 1,
        bottom: 0,
        left: "calc(10% - 1px)",
        height: "30%",
        transitionProperty: "left",
        transitionDuration: ".5s",
        transitionDelay: ".5s",
    },
    "&.active": {
        width: 0,
        overflow: "hidden",
        transition: "all 0.5s",
        ":before": {
            left: 0,
        },
        ":after": {
            left: 0,
        }
    },
})

export const UListContainer = styled.ul({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 0 0 40px",
})

export const ListItem = styled.li({
    position: "relative",
    width: "100%",
    
    "a": {
        display: "flex",
        alignItems: "center",
        gap: 10, 
        width: "90%",
        margin: "10px 10px",
        color: colors.fonts.white,
        "h3": {
            letterSpacing: 2,
            transition: "all .5s ease-in-out",
        },
        "svg":{
            zIndex: 10,
        }
    },

    ":hover": {
        "a h3": {
            letterSpacing: 6,
            color: colors.fonts.white
        }
    },
    "&.active-option": {
        color: colors.fonts.white,
        border: "1px solid white",
        borderRight: "none",
        ":before": {
            content: `""`,
            backgroundColor: colors.background.mainBlack,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "calc(100% + 1px)",
            zIndex: 0,
        },
        "a h3": {
            zIndex: 1,
            letterSpacing: 8,
            color: colors.fonts.white
        }
    },
})

