import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "relative",
    paddingTop: 80,
    padding: "7% 5% 10% 5%",
    backgroundColor: "transparent",
    color: colors.fonts.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

export const ContactForm = styled.form({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 600,
    height: "fit-content",
    marginTop: 80,
    gap: 40,
    border: `1px solid ${colors.background.mainWhite}`,
    padding: "60px 40px",
    boxSizing: "content-box",
    zIndex: 10,
    backgroundColor: "transparent",
})


