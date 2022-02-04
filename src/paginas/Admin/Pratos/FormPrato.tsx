import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Dashboard from '../Dashboard';
import { FileUpload } from '@mui/icons-material';

const FormPrato = () => {
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
          Formulário de prato
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField margin='dense' id="nome" label="Nome" type="text" fullWidth />
          <TextField margin='dense' id="tag" label="Tag" type="text" fullWidth />
          <TextField margin='dense' id="descricao" label="Descrição" multiline rows={4} type="text" fullWidth />
          <FormControl margin='dense' fullWidth>
            <InputLabel id="restaurante-select-label">Restaurante</InputLabel>
            <Select
              labelId="restaurante-select-label"
              id="restaurante-select"
              label="Restaurante"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="imagem-do-prato"
            type="file"
          />
          <label htmlFor="imagem-do-prato">
            <Button variant="outlined" component="span" sx={{ my: 1 }} endIcon={<FileUpload />}>
              Imagem do prato
            </Button>
          </label>
          <Button fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </Dashboard>
  );
}

export default FormPrato