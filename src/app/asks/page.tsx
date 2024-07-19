import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import Button from '@mui/material/Button';
import NavBar from '@/components/NavBar'

export default function Asks() {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Asks
        </Typography>
        <Copyright />
      </Container>
    </>
  );
}
