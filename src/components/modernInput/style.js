import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/typography";

export const Container = styled.div({
    position: "relative",
    width: "100%",
})

export const Input = styled.input({
    backgroundColor: "transparent",
    border: 0,
    borderBottom: `1px solid ${colors.background.whiteGray}`,
    display: "block",
    width: "100%",
    padding: "8px 2px",
    color: colors.fonts.darkGray,
    ":focus+label span, :valid+label span": {
        color: colors.fonts.white,
        transform: "translateY(-35px)"
    },
    ":focus+label+.input-border": {
        width: "100%",
    }
})

export const InputBorder = styled.span(({transitionDelay}) => ({
    position: "absolute",
    backgroundColor: colors.background.mainWhite,
    width: "0%",
    height: 1.5,
    bottom: 0, 
    left: 0, 
    transition: "width 0.5s ease-in-out",
    transitionDelay: transitionDelay + "ms",
}))

export const Label = styled.label({
    position: "absolute",
    top: 10, 
    left: 0,
    pointerEvents: "none",
    backgroundColor: "transparent",
    fontFamily: fonts.primary,
})

export const LetterSpan = styled.span(({transitionDelay}) => ({
    display: "inline-block",
    fontSize: 16,
    minWidth: 5,
    margin: "0 2px",
    transition: "0.3s ease-out",
    transitionDelay: transitionDelay + "ms",
}))