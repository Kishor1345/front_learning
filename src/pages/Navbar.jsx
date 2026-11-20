import { Paper, Stack } from "@mui/material";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
const Navbar = () => {
  const location = useLocation();
  const homePath = "/";
  const inboxPath = "/inbox";
  const employeedetails = "/employeedetails";
  const contact = "/contact";
  return (
    <>
      <nav>
        <Paper
          elevation={10}
          sx={{
            m: 3,
            p: 2,
            borderRadius: "10px",
            background: "#2c3f66",
          }}
        >
          <Stack
            direction={"row"}
            spacing={5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: homePath === location.pathname ? "black" : "white",
                padding: homePath === location.pathname ? "5px 10px" : "0px",
                border:
                  homePath === location.pathname ? "2px solid #ffffff" : "none",
                borderRadius: homePath === location.pathname ? "5px" : "none",
                background: homePath === location.pathname ? "white" : "none",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/inbox"
              style={{
                textDecoration: "none",
                color: inboxPath === location.pathname ? "black" : "white",
                padding: inboxPath === location.pathname ? "5px 10px" : "0px",
                border:
                  inboxPath === location.pathname
                    ? "2px solid #ffffff"
                    : "none",
                borderRadius: inboxPath === location.pathname ? "5px" : "none",
                background: inboxPath === location.pathname ? "white" : "none",
              }}
            >
              Inbox
            </NavLink>
            <NavLink
              to="/employeedetails"
              style={{
                textDecoration: "none",
                color:
                  employeedetails === location.pathname ? "black" : "white",
                padding:
                  employeedetails === location.pathname ? "5px 10px" : "0px",
                border:
                  employeedetails === location.pathname
                    ? "2px solid #ffffff"
                    : "none",
                borderRadius:
                  employeedetails === location.pathname ? "5px" : "none",
                background:
                  employeedetails === location.pathname ? "white" : "none",
              }}
            >
              EmployeeDetails
            </NavLink>
            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                color: contact === location.pathname ? "black" : "white",
                padding: contact === location.pathname ? "5px 10px" : "0px",
                border:
                  contact === location.pathname ? "2px solid #ffffff" : "none",
                borderRadius: contact === location.pathname ? "5px" : "none",
                background: contact === location.pathname ? "white" : "none",
              }}
            >
              Contact
            </NavLink>
          </Stack>
        </Paper>
      </nav>
    </>
  );
};

export default Navbar;
