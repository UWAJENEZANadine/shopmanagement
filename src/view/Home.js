import React from "react";
import { Container, Grid, Card, TextField, Stack, Button } from "@mui/material";
import "../css/Home.css";
import logo from "../assets/logo.jpg"
import { useNavigate } from "react-router-dom";

const styles = { width: "100%", height: "100vh" };

const ViewComponent = (props) => {
  const navigate = useNavigate();
  return (
    <Container sx={styles}>
      <Grid
        sx={styles}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
         
          <Card className="sign-container">
          <img src={logo} style= {{ width:"20%", height:"15vh", borderRadius:"50%"}}/>
           <h1>Sign In</h1>
            <Stack spacing={3} alignItems="center" justifyContent="center">
              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
              />
              <Button variant="contained">Sign In</Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
export default ViewComponent;
