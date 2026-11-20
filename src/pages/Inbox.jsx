import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
const Inbox = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={10} sx={{ p: 3, borderTop: "4px solid #4c8a97" }}>
          <Box>
            <Typography variant="h6">Inbox</Typography>
          </Box>
          <Divider
            sx={{
              mt: 1,
              mb: 3,
            }}
          />

        </Paper>
      </Container>
    </>
  );
};
export default Inbox;
