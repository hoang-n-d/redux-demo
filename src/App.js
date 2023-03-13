import "./App.css";
import User from "./User";
import AddUser from "./components/AddUser";
import Container from "@mui/material/Container";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
export default function App() {
    return (
      <div className="App">
        <Navigation/>

      <Box sx={{ flexGrow: 1 }} className='box'>
        <Container>
        <Grid container spacing={0}>
          <Grid item xs={16}>
            <Contact/>
          </Grid>
          <Grid item xs={16}>
          <User />
          </Grid>
        </Grid>
        </Container>
      </Box>

      </div>
    );
  }
