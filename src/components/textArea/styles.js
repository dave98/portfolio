import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.textarea({
    width: "100%",
    padding: 15,
    outline: "none",
    color: colors.fonts.white,
    backgroundColor: "transparent",
    border: `1px solid ${colors.background.mainWhite}`,
    resize: "none",
    ":focus": {
        backgroundColor: colors.background.mainBlack,
        boxShadow: `10px 10px 0px 0px ${colors.background.mainWhite}`
    }
})