import {css} from "@emotion/react"

export const fonts = {
    primary:  "Rajdhani",
    secondary: "Quicksand",
}

export const typography = {
    title: {
        xxl:  css({
            fontSize: 96,
            lineHeight: "64px",
        }),
        xl: css({
            fontSize: 48,
            lineHeight: "56px",
        }),
        l: css({
            fontSize: 40,
            lineHeight: "48px"
        }),
        md: css({
            fontSize: 32,
            lineHeight: "40px",
        }),
        sm: css({
            fontSize: 24,
            lineHeight: "32px",
        }),
        xs:  css({
            fontSize: 16,
            lineHeight: "24px",
        })
    },
    paragraph: {
        xxl: css({
            fontSize: 24,
            lineHeight: "40px",
        }),
        xl: css({
            fontSize: 22,
            lineHeight: "36px",
        }),
        l: css({
            fontSize: 20,
            lineHeight: "32px",
        }),
        md: css({
            fontSize: 18,
            lineHeight: "28px",
        }),
        sm: css({
            fontSize: 16,
            lineHeight: "24px",
        }),
        xs: css({
            fontSize: 14,
            lineHeight: "20px",
        })
    },
    button: {
        xxl: css({
            fontSize: 22,
            lineHeight: "26px",
        }),
        xl: css({
            fontSize: 20,
            lineHeight: "24px",
        }),
        l: css({
            fontSize: 18,
            lineHeight: "22px",
        }),
        md: css({
            fontSize: 16,
            lineHeight: "20px",
        }),
        sm: css({
            fontSize: 14,
            lineHeight: "18px",
        }),
        xs: css({
            fontSize: 12,
            lineHeight: "16px",
        })
    }
}