import React from "react";
import { Container } from "@mui/material";
import TopNav from "../molecules/TopNav";

interface Props {
    children: React.ReactNode;
}

function MainTemplate({ children }: Props) {
    return (
        <>
            <TopNav />
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                {children}
            </Container>
        </>
    );
}

export default MainTemplate;