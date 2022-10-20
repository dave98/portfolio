import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/typography";

export const Container = styled.div({
    position: "relative",
    minHeight: "100vh",
    padding: "7% 5% 10% 5%",
    backgroundColor: "transparent",
    color: colors.fonts.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})


export const Content = styled.div({
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
})

export const TextBox = styled.div({
    position: "relative",
    width: "45%",
    minWidth: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 40,
    textAlign: "right",
    padding: "10% 10%"
})

export const SkillBox = styled.div({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    maxHeight: 500,
    overflowY: "scroll",
    gap: 10,
    padding: "0 5%",
})

export const Skill = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
})


export const Separator = styled.span({
    position: "relative",
    width: "100%",
    marginTop: "3%",
    marginBottom: "5%",
    padding: "0 30%"
})

export const IncomingSkillMainContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: "100%",
})

export const IncomingSkillContainer = styled.div({
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 50,
})

export const IncomingSkill = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,  
  fontSize: 40,
})