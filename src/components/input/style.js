import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.input({
     width: "100%",
     padding: 15,
     outline: "none",
     color: colors.fonts.white,
     backgroundColor: "transparent",
     border: `1px solid ${colors.background.mainWhite}`,
     ":focus": {
        boxShadow: `10px 10px 0px 0px ${colors.background.mainWhite}`
     }
})