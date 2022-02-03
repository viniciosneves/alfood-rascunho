
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  return (
    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
      <Card >
        <CardContent>
          <Typography variant="h4">
            Cadastro
          </Typography>
          <form>
            <TextField margin='dense' id="nome" label="Nome" type="text" fullWidth />
            <TextField margin='dense' id="usuario" label="Nome de usuário" type="text" fullWidth />
            <TextField margin='dense' id="senha" label="Senha" type="password" fullWidth />
            <Typography>
              Já possui conta? Clique <Link to='/login'>aqui</Link>
            </Typography>
            <Button variant="contained">Salvar</Button>
          </form>
        </CardContent>
      </Card >
    </Box>
  )
}

export default Cadastro