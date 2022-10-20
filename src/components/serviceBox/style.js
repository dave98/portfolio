import styled from "@emotion/styled";

export const Container = styled.div({
    border: "1px solid rgba(254, 254, 254, 0.15)",
    padding: "50px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
})

export const Image = styled.img({
    maxWidth: 100,
    objectFit: "cover",
})