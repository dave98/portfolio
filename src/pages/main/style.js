import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div({
    position: "absolute",
    width: "calc(100% - 300px)",
    backgroundColor: colors.background.white,
    left: 300,
    transition: "all 0.5s",

    "&.active": {   
        width: "100%",
        left: 0,
    },
})


