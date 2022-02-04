
import { Box, Button, TextField, Typography, Container, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Cadastro
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField margin='dense' id="nome" label="Nome" type="text" fullWidth />
          <TextField margin='dense' id="usuario" label="Nome de usuário" type="text" fullWidth />
          <TextField margin='dense' id="senha" label="Senha" type="password" fullWidth />
          <Typography sx={{ my: 2 }}>
            Já possui conta? Clique <Link to='/admin/login'>aqui</Link>
          </Typography>
          <Button fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login