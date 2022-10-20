import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";

const Text = styled.p(({
    family = fonts.secondary,
    size = "md", 
    weight = 500, 
    color = colors.fonts.white,
    letterSpacing = 0,
    textTransform = "none",
    textAlign = "none"
}) => ([{
    fontFamily: family,
},{
    ...typography.paragraph[size],
},{
    fontWeight: weight,
    color: color,
    letterSpacing: letterSpacing,
    textTransform: textTransform,
    textAlign: textAlign,
}]))

export default Text;