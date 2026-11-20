import { Link } from "react-router";
import { Box, Container, Paper,Stack } from "@mui/material";

function NotFound() {
    return (
        <>
            <Container>
                <Paper elevation={10}>
                    <Stack direction={"row"} sx={{
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            p: 2
                        }}>
                            <h1>404: Page not found</h1>
                            <p>The page you are looking for does not exist.</p>
                            <Link to="/">Go back home</Link>
                        </Box>
                    </Stack>
                </Paper>
            </Container>

        </>
    );
}

export default NotFound;