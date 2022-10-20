import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { layouts } from "../../styles/layouts";
import { fonts, typography } from "../../styles/typography";

export const Container = styled.button( ({ size = "md"}) => [
    { ...typography.button[size] },
    { ...layouts.button[size] }
], ({textTransform = "none"}) => ({
    color: colors.fonts.white,
    backgroundColor: colors.background.mainBlack,
    cursor: "pointer",
    textTransform: textTransform,
}),
({ buttonType = "ghost" }) => (
    function (){
     if(buttonType === "line"){
        return {
            border: `1px solid ${colors.background.mainWhite}`,
            transition: "all .5s ease-in-out",
            ":hover": {
                backgroundColor: colors.background.mainWhite,
                color: colors.fonts.black,
            },        
        }
     }else if(buttonType == "ghost"){
            return {
                ":hover": {
                    transform: "scale(1.15)"
                }
            }
     }else if(buttonType == "filled"){
        return {
            ":hover": {
                color: colors.fonts.white,
                backgroundColor: colors.fonts.darkGray,
            }
        }
     }else if(buttonType == "modern"){
            return {
                position: "relative",
                border: `1px solid ${colors.background.mainWhite}`,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FFFFFF /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
                backgroundColor: colors.background.mainBlack,
                backgroundSize: "200%",
                backgroundPosition: "200%",
                backgroundRepeat: "no-repeat",
                transition: "0.5s ease-in-out",
                transitionProperty: "background-position, border, color",
                ":hover": {
                    color: colors.fonts.black,
                    backgroundPosition: "40%",
                    ":before": {
                        backgroundColor: colors.background.mainBlack,
                    },
                    ":after": {
                        backgroundColor: colors.background.mainBlack,
                    }
                },
                ":before": {
                    content: `""`,
                    position: "absolute",
                    backgroundColor: colors.background.mainWhite,
                    width: "0.5rem",
                    height: "0.5rem",
                    top: -1,
                    left: -1,
                    transition: "background-color 0.5s ease-in-out",
                },
                ":after": {
                    content: `""`,
                    position: "absolute",
                    backgroundColor: colors.background.mainWhite,
                    width: "0.5rem",
                    height: "0.5rem",
                    bottom: -1,
                    right: -1,
                    transition: "background-color 0.5s ease-in-out",
                }
            }
     }
    }
))
