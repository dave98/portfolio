import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "fixed",
    top: 0,
    left: 300,
    width: "calc(100% - 300px)",
    backgroundColor: colors.background.mainBlack,
    borderBottom: "1px solid rgba(254, 254, 254, 0.2)",
    height: 60,
    padding: "0 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10, 
    transition: "width 0.5s, left 0.5s",

    "&.active": {
        width: "100%",
        left: 0,
    }
})

export const Toggler = styled.div({
    position: "relative",
    width: 50,
    height: 50,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: colors.fonts.white,
})