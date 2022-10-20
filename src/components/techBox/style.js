import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appearing = keyframes({
    "0%": {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
    },
    "20%": {
        clipPath: "polygon(0 0, 25% 0, 0 100%, 0 100%)"
    },
    "40%": {
        clipPath: "polygon(0 0, 50% 0, 25% 100%, 0 100%)"
    },
    "60%": {
        clipPath: "polygon(0 0, 75% 0, 50% 100%, 0 100%)"
    },
    "80%": {
        clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)"
    },
    "100%": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
})

const closing = keyframes({
    "0%": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    },
    "20%": {
        clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)"
    },
    "40%": {
        clipPath: "polygon(50% 0, 100% 0, 100% 100%, 25% 100%)"
    },
    "60%": {
        clipPath: "polygon(75% 0, 100% 0, 100% 100%, 50% 100%)"
    },
    "80%": {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 75% 100%)"
    },
    "100%": {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
    }
})

export const MainContainer = styled.div(({
    position: "relative",
    flex: "50%",
    minWidth: "50%",
    maxWidth: "50%",
    height: "100%",
    ":after": {
        content: `""`,
        position: "absolute",
        inset: 0,
        top: "20%",
        height: "60%",
        transitionDuration: ".75s",
        transitionTimingFunction: "ease-in-out",
    },
    "&.closing": {
        ":after": {
            top: "35%",
            height: "30%",
        }
    }   

}), ({directionOrigin}) => (
    function(){
        if(directionOrigin === "left"){
            return {
                ":after":{
                    borderRight: "1px solid white"
                }
            }
        }else{
            return {
                ":after": {
                    borderLeft: "1px solid white",
                }
            }
        }
    }
))

export const Container = styled.div(({
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 100px",
    textAlign: "justify",  
    animationDuration: "0.75s",
    animationDelay: "0s",
    animationTimingFunction: "linear",
    animationIterationCount: 1,
    "&.appearing": {
        animationName: appearing,
    },
    "&.closing": {
        animationName: closing,
    }
}))

export const Header = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 0",
    alignItems: "center",
})

export const DescriptionContainer = styled.blockquote({
    zIndex: 20,
    position: "relative",
    padding: "10px 30px",
    maxHeight: "25%",
    overflowY: "scroll",
    ":before": {
        content: "open-quote",
        color: "white",
        fontSize: 20,
    },
    ":after": {
        position: "sticky",
        left: "100%",
        content: "close-quote",
        color: "white",
        fontSize: 20,
    }

})