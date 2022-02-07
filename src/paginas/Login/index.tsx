
import { Box, Button, TextField, Typography, Container, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SyntheticEvent, useState } from 'react';
import http from '../../http';
import IToken from '../../interfaces/IToken';
import useAutenticador from '../../hooks/useAutenticador';

const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate();
  const autenticar = useAutenticador()
  
  const aoSubmeterForm = (evento: SyntheticEvent) => {
    evento.preventDefault()
    http.post<IToken>('/token/', {
      username: nomeUsuario,
      password: senha
    }).then(resposta => {
      navigate("/dashboard/restaurantes")
      autenticar(resposta.data)
    })    
  }
  
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
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={aoSubmeterForm}>
        <TextField
            required
            value={nomeUsuario}
            onChange={evento => setNomeUsuario(evento.target.value)}
            margin='dense'
            id="usuario"
            label="Nome de usuário"
            type="text"
            fullWidth />
          <TextField
            required
            value={senha}
            onChange={evento => setSenha(evento.target.value)}
            margin='dense'
            id="senha"
            label="Senha"
            type="password"
            fullWidth />
          <Typography sx={{ my: 2 }}>
            Ainda não possui conta? Clique <Link to='/admin/cadastro'>aqui</Link>
          </Typography>
          <Button fullWidth variant="contained" type='submit'>Salvar</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login