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
          <Button variant="contained" component={NextLink} href="/dashboard" sx={{ margin: .25 }}>
            Dashboard
          </Button>
          <Button variant="contained" component={NextLink} href="/profile" sx={{ margin: .25 }}>
            Profile
          </Button>
          <Button variant="contained" component={NextLink} href="/signup" sx={{ margin: .25 }}>
            Signup
          </Button>
          <Button variant="contained" component={NextLink} href="/signin" sx={{ margin: .25 }}>
            Signin
          </Button>
          <Button variant="contained" component={NextLink} href="sms:1234567?body=check out CuppaSugar!" sx={{ margin: .25 }}>
            Share
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
