import { Svg } from "./style";

export default function Center({
    horizontalDeformation = "center",
    verticalDeformation = "bottom",
    reversed= false,
    height,
    width,
}){
    function buildLine(){
        if(horizontalDeformation === "right"){
            return (
                "5,"   + (verticalDeformation === "top" ? "95" : "5") + " " + 
                "65," + (verticalDeformation === "top" ? "95" : "5") + " " + 
                "70," + (verticalDeformation === "top" ? "5" : "95")   + " " +
                "95," + (verticalDeformation === "top" ? "5" : "95")
            )
        }else if(horizontalDeformation==="left"){
            return (
                "5,"   + (verticalDeformation === "top" ? "5" : "95") + " " +
                "30," + (verticalDeformation === "top" ? "5" : "95") + " " +
                "35," + (verticalDeformation === "top" ? "95" : "5")  + " " + 
                "95," + (verticalDeformation === "top" ? "95" : "5")
            )
        }else{
            return (
                "5,"   + (verticalDeformation === "top" ? "95" : "5") + " " +
                "30," + (verticalDeformation === "top" ? "95" : "5") + " " +
                "35," + (verticalDeformation === "top" ? "5" : "95") + " " +
                "65," + (verticalDeformation === "top" ? "5" : "95") + " " +
                "70," + (verticalDeformation === "top" ? "95" : "5") + " " +
                "95," + (verticalDeformation === "top" ? "95" : "5")
            )
        }
    }

    // "right top" ->           5,95    →  65,95 ↗  70,5    → 95, 5
    // "right bottom" ->    5,5      →  65,5   ↘ 70,95  → 95, 95

    // "left top" ->              5,5      → 30,5    ↘ 35,95  → 95,95
    // "left bottom" ->       5,95       30,95     35,5        95,5
    
    // "center top" ->         5,95  →  30,95  ↗ 35,5   → 65,5   ↘ 70,95 → 95,95
    // "center bottom" ->  5,5    →  30,5    ↘ 35,95 → 65,95 ↗ 70,5 → 95,5
    return (
        <Svg viewBox="0 0 100 100" preserveAspectRatio="none" pheight={height} pwidth={width}>
            <polyline
                points={buildLine()}
                fill="none"
                stroke={"white"} strokeWidth={2}
            />
           
        </Svg>
    )
}