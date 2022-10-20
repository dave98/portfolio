import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "relative",
    paddingTop: 80,
    padding: "7% 5% 10% 5%",
    backgroundColor: "transparent",
    color: colors.fonts.white,
})


export const Row = styled.div({
    display: "flex",
    justifyContent: "center",
    gap: 15,
    flexWrap: "wrap",
    padding: "50px 0",
})

export const Column = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: 15,
    flex: "30%",
    maxWidth: "30%",
    "@media (max-width: 1400px)": {
        flex: "50%",
        maxWidth: "50%",
    },
    "@media (max-width: 800px)": {
        flex: "100%",
        maxWidth: "100%",
    }
})