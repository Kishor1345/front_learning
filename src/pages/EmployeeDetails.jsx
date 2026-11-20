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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveEmployeeData } from "../feature/employeeSlice";
const EmployeeDetails = () => {
  const employeeData = useSelector((state) => state.employee.employeeData);
  const dispatch = useDispatch();
  console.log(employeeData);
  const handleEdit = (data)=>{
    console.log(data)
  }
  const handleDelete = (id)=>{
    console.log(id)
    dispatch(setRemoveEmployeeData(id))
  }
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
