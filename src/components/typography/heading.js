import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";

const Heading = styled.h3(({
    family = fonts.primary,
    size = "md", 
    weight = 900, 
    color = colors.fonts.white, 
    letterSpacing = 0,
    textTransform = "none",
}) => ([{
    fontFamily:  family,
},{
    ...typography.title[size],
},{ 
    fontWeight: weight,
    color: color,
    letterSpacing: letterSpacing,
    textTransform: textTransform,
}]))

export default Heading;