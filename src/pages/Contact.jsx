import { Box, Container, Paper, Stack, Typography } from "@mui/material";
const Contact = () => {
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
                                Contact Screen
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}

export default Contact;