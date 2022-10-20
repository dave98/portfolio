import {css} from "@emotion/react";
import { colors } from "./colors";

export const resetter = css({
    "*, *::before, *::after": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        textDecoration: "none",
        outline: "none",
        border: "none",
        scrollBehavior: "smooth",
        textRendering: "optimizeSpeed",
        backgroundColor: "inherit",
    },
    "img, picture": {
        maxWidth: "100%",
        display: "block",
    },
})

export const global = css([
    `@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");`,
    `@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");`,
    {
        "body": {
            minWidth: 360,
            cursor: "url(cursors/cursor.svg), auto",
            overflowX: "hidden",
        },
        "a, .with-cursor": {
            cursor: "url(cursors/cursor-pointer.svg), auto",
        },
        "::-webkit-scrollbar": {
            width: 5,
        },
        "::-webkit-scrollbar-track": { 
            backgroundColor: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: colors.background.darkGray,
            transition: "all .5s ease-in-out"
        },
        "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: colors.background.mainWhite,
        }
    }
])