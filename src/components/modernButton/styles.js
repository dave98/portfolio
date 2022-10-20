import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { layouts } from "../../styles/layouts";
import { fonts, typography } from "../../styles/typography";

// Button borders
export const Container = styled.div({
    position: "relative",
    ":before": {
        content: `""`,
        position: "absolute",
        width: "calc(100% + 1em)",
        height: "50%",
        left: "-0.5em",
        top: "-0.5em",
        border: `1px solid ${colors.background.mainWhite}`,
        borderBottom: 0,
    },
    ":after": {
        content: `""`,
        position: "absolute",
        width: "calc(100% + 1em)",
        height: "50%",
        left: "-0.5em",
        bottom: "-0.5em",
        border: `1px solid ${colors.background.mainWhite}`,
        borderTop: 0,
        zIndex: 0,
    }
})

export const ButtonDisplayer = styled.button( 
({size = "xs"}) => [
    {...typography.button[size]},
    {...layouts.button[size]},
],
({textTransform = "none", transparent}) => ({   
    width: "100%",
    textTransform: textTransform,
    letterSpacing: 2,
    fontFamily: fonts.secondary,
    fontWeight: 500,
    color: colors.fonts.white,
    cursor: "pointer",
    position: "relative",
    border: `1px solid ${colors.background.mainWhite}`,
    backgroundImage: !transparent ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FFFFFF /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")` : "none" ,
    backgroundColor: !transparent ? colors.background.mainBlack : "transparent",
    backgroundSize: "200%",
    backgroundPosition: "200%",
    backgroundRepeat: "no-repeat",
    transition: "0.5s ease-in-out",
    transitionProperty: "background-position, border, color, letter-spacing",
    zIndex: 1,
    ":before": {
        content: `""`,
        position: "absolute",
        backgroundColor: colors.background.mainWhite,
        width: "0.5rem",
        height: "0.5rem",
        top: 0,
        left: 0,
        transition: "0.4s ease-in-out",
        transitionProperty: "background-color, top, width, height"
    },
    ":after": {
        content: `""`,
        position: "absolute",
        backgroundColor: colors.background.mainWhite,
        width: "0.5rem",
        height: "0.5rem",
        bottom: 0,
        right: 0,
        transition: "0.4s ease-in-out",
        transitionProperty: "background-color, bottom, width, height",
    },
    ":hover": {
        color: !transparent ? colors.fonts.black : colors.fonts.white,
        backgroundPosition: "40%",
        letterSpacing: 6,
        ":before": {
            backgroundColor: !transparent ? colors.background.mainBlack : colors.background.mainWhite,
            top: "calc(100% - 1.2rem)",
            width: "1.2rem",
            height: "1.2rem"
        },
        ":after": {
            backgroundColor: !transparent ? colors.background.mainBlack : colors.background.mainWhite,
            bottom: "calc(100% - 1.2rem)",
            width: "1.2rem",
            height: "1.2rem"
        }
    },
    ":active": {
        transform: "scale(0.99)",
    }
}))