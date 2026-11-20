import { Box, Container, Paper, Typography,Stack } from "@mui/material";

const Home = () => {
    return (
        <>
            <Container maxWidth="md">
                <Paper elevation={10}>
                    <Stack direction={"row"} sx={{
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            p: 2
                        }}>
                            <Typography variant="">
                                Home Screen
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}

export default Home;