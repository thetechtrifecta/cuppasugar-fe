import * as React from 'react';
import MuiLink from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/asks" sx={{ margin: .25 }}>
            All Asks
          </Button>
          <Button variant="contained" component={NextLink} href="/asks" sx={{ margin: .25 }}>
            Open Asks
          </Button>
          <Button variant="contained" component={NextLink} href="/asks" sx={{ margin: .25 }}>
            Your Asks
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
