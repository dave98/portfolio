import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "relative",
    padding: "7% 5% 10% 5%",
    backgroundColor: "transparent",
    color: colors.fonts.white,
    display: "flex",
    flexDirection: "column",
    gap: 50,
    width: "100%",
})

export const Separator = styled.span({
    position: "relative",
    width: "100%",
    padding: "0 30%"
})
