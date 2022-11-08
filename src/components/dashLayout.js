import React from "react";
import { Grid, Card, Stack } from "@mui/material";
import Sider from "./layout/Side";
import TopNav from "./layout/TopNav";

const Component = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Sider />
      </Grid>
      <Grid item xs={9}>
        <Stack spacing ={1}>
        <TopNav />
        </Stack>

        <Card sx={{minHeight:"100vh"}}>
          {props.children}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component
