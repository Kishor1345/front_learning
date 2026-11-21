import {
  Box,
  Container,
  Paper,
  Typography,
  Table,
  Divider,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Grid,
  TextField,
  Stack,
  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveEmployeeData } from "../feature/employeeSlice";
import { useState } from "react";
const EmployeeDetails = () => {
  const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    dob: "",
  });
  const employeeData = useSelector((state) => state.employee.employeeData);
  const dispatch = useDispatch();
  console.log(employeeData);
  const handleEdit = (data) => {
    setOpen(true)
    setFormData({
      name:data.name,
      email:data.email,
      contactno:data.contactno,
      dob:data.dob
    })
    console.log(data)
  }
  const handleDelete = (id) => {
    console.log(id)
    dispatch(setRemoveEmployeeData(id))
  }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
      // dispatch(setEmployeeData(formData));
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
            <Typography variant="h6">Employee Info</Typography>
          </Box>
          <Divider
            sx={{
              mt: 1,
              mb: 3,
            }}
          />
            <Collapse in={open}>
            <Box>
            <Typography variant="h6">Edit Employee Details</Typography>
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
                
              }}
            >
              

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
          </Collapse>

          <Box sx={{ width: "100%" }}>
            <TableContainer
              sx={{
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Table sx={{ width: "100%" }}>
                <TableHead
                  sx={{
                    backgroundColor: "#3e688a",
                  }}
                >
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Sno.
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Employee Name
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Employee Email
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Contact Number
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      DOB
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeData.map((data, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.contactno}</TableCell>
                        <TableCell>{data.dob}</TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => handleEdit(data)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDelete(data.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default EmployeeDetails;
