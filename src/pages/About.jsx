import { Box, Container, Paper, Typography,Stack } from "@mui/material";
const About = () => {
    return (
        <>
            <Container maxWidth="md">
                <Paper elevation={10}>
                     <Stack direction={"row"} sx={{
                        justifyContent:"center"
                    }}>
                        <Box sx={{
                            p: 2
                        }}>
                            <Typography variant="">
                                About Screen
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}

export default About;