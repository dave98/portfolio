import { Svg } from "./style";

export default function Corner({
    vertical = "top", // "bottom" 
    horizontal = "left", // "right"
}){
    return (
        <Svg>
            <defs>
                <filter id="f1" x="0" y={"0"}>
                    <feGaussianBlur in="SourceGraphic" stdDeviation={0}/>
                </filter>
            </defs>
 
            <circle 
                cx={horizontal === "left" ? "70%" : "30%"} cy={vertical === "top"  ? "2%" : "98%"}  
                r={"1%"} 
                fill={"white"} filter={"url(#f1)"}
            />
            
            <line 
                x1={horizontal === "left" ? "70%" : "30%"} y1={vertical === "top" ? "2%" : "98%"} 
                x2={horizontal === "left" ? "15%" : "85%"} y2={vertical === "top" ? "2%" : "98%"} 
                stroke={"white"} strokeWidth={1}
            />
            <line 
                x1={horizontal === "left" ? "15%" : "85%"} y1={ vertical === "top" ? "2%" : "98%"} 
                x2={horizontal === "left" ? "2%"  : "98%"} y2={vertical === "top" ? "15%" : "85%"} 
                stroke={"white"} strokeWidth={1}
            />
            <line 
                x1={horizontal === "left" ? "2%"  : "98%"} y1={ vertical === "top" ? "15%" : "85%"} 
                x2={horizontal === "left" ? "2%"  : "98%"} y2={"50%"} 
                stroke={"white"} strokeWidth={1}
            />

            <rect 
                x={`calc(${horizontal === "left" ? "2" : "98"}% - 1%)`} y={"50%"} 
                width={"2%"} height={"2%"} 
                fill={"white"}
            />
        </Svg>
    )
}