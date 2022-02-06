import Paper from '@mui/material/Paper';
import { AppBar, Box, Button, Container, Grid, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

const Base: React.FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute">
        <Toolbar>
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <nav>
              <Link
                variant="button"
                component={RouterLink}
                color="inherit"
                to="/admin/pratos"
                sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
              >
                Pratos
              </Link>
              <Link
                variant="button"
                component={RouterLink}
                color="inherit"
                to="/admin/restaurantes"
                sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
              >
                Restaurantes
              </Link>
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Base