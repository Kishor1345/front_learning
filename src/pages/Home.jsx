import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../feature/employeeSlice";
import { useState } from "react";
import Swal from "sweetalert2";
const Home = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    contactno: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setEmployeeData(formData));
    setFormData({
      name: "",
      email: "",
      contactno: "",
      dob: "",
    });
    Swal.fire({
      title: "Success!",
      text: "Employee saved successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={10} sx={{ p: 3, borderTop: "4px solid #4c8a97" }}>
          <Box>
            <Typography variant="h6">Employee Details</Typography>
          </Box>
          <Divider
            sx={{
              mt: 1,
              mb: 3,
            }}
          />
          <Grid
            container
            spacing={2}
            sx={{
              mb: 2,
            }}
          >
            {/* {console.log(formData)} */}
            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <TextField
                label="Employee Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            {/* {console.log(formData)} */}
            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <TextField
                label="Employee Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <TextField
                label="Employee Contact No"
                type="number"
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <TextField
                type="date"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
                fullWidth
              />
            </Grid>
          </Grid>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                px: 4,
                py: 1,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 4,
                py: 1,
              }}
            >
              Save as Draft
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                px: 4,
                py: 1,
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
