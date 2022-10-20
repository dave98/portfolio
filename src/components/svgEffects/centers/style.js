import styled from "@emotion/styled";


export const Svg = styled.svg(({pheight, pwidth}) => ({
    position: "relative",
    height:  pheight ? pheight : "5%",
    width: pwidth ? pwidth : "100%",
    vectorEffect: "non-scaling-stroke",
    strokeDasharray: "80% 10%",
}))