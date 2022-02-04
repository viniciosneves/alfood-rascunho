import { Box, Typography, TextField, Button } from '@mui/material';
import Dashboard from '../Dashboard';

const FormRestaurante = () => {
  return (
    <Dashboard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h6">
          Formulário de restaurante
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField margin='dense' id="nome" label="Nome" type="text" fullWidth />
          <Button fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </Dashboard>
  );
}

export default FormRestaurante