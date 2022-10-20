import { useEffect } from "react";
import { ReactIcon } from "../brandedIcons";
import { Icons } from "../iconIndex/iconIndex";
import { Container, Icon, SvgBar, SvgCircle } from "./style";

export default function HorizontalProgressBar({progress=100, icon="reactjs"}){
    
    useEffect(() => {
        Array.from(document.getElementsByClassName("filler")).forEach(el => {
            el.setAttribute("style",
                "stroke-dasharray: " + el.getTotalLength() + ";" +
                "stroke-dashoffset:" + el.getTotalLength()
            )
        })
    }, [])

    return (
        <Container>
            <SvgCircle viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx={"50%"} cy={"50%"} r={"45%"}/>
                <circle cx={"50%"} cy={"50%"} r={"43%"} />
            </SvgCircle>
            <SvgBar viewBox="0 0 100 10" preserveAspectRatio="none" progress={progress}>                          
                <defs>
                    <linearGradient id="fadeGrad">
                        <stop offset="0"  stopColor="white" stopOpacity="0"/>
                        <stop offset="10" stopColor="white" stopOpacity="1"/>
                    </linearGradient>   
                    <mask id="fade" maskContentUnits="objectBoundingBox">
                        <rect x="0"  width="10" height="10" fill="url(#fadeGrad)"/>
                    </mask>
                </defs>

                <polyline points="6,2 3,2 1,3.5 1,6.5 3,8 6,8"/>
                <polyline points="94,2  97,2  99,3.5 99,6.5 97,8 94,8"/>
                <line x1={"6"} y1={"2"} x2={"94"} y2={"2"}/>
                <line x1={"6"} y1={"8"} x2={"94"} y2={"8"} />
                <line 
                    className="filler-background"
                    x1={"3"} y1={"5"} x2={"97"} y2={"5"}
                />
                <line 
                    className="filler"
                    x1={"3"} y1={"5"} x2={"97"} y2={"5"}
                >

                </line>
                <line 
                    className="border1"
                    x1={"3"} y1={"1"} x2={"97"} y2={"1"}
                />
                <line 
                    className="border2"
                    x1={"3"} y1={"9"} x2={"97"} y2={"9"}
                />
            </SvgBar>
            <Icon>
                {
                    Icons[icon].normal
                }
            </Icon>
        </Container>
    )
}
