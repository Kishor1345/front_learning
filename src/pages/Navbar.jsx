import { Paper, Stack } from "@mui/material"
import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <>
            <nav>
                <Paper  elevation={10} sx={{
                    m:3,
                    p:3,
                    borderRadius:"10px",
                    background:"#c2f3f7",
                }}>
                    <Stack direction={"row"} spacing={5} sx={{
                        justifyContent:"center"
                    }} >
                        <NavLink to="/" style={{textDecoration:"none",color:"black"}}>Home</NavLink>
                        <NavLink to="/product" style={{textDecoration:"none",color:"black"}}>Product</NavLink>
                        <NavLink to="/about" style={{textDecoration:"none",color:"black"}}>About</NavLink>
                        <NavLink to="/contact" style={{textDecoration:"none",color:"black"}}>Contact</NavLink>
                    </Stack>
                </Paper>
            </nav>
        </>
    )
}

export default Navbar