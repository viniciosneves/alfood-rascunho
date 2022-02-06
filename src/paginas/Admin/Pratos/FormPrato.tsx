import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Dashboard from '../Dashboard';
import { FileUpload } from '@mui/icons-material';
import { Method } from 'axios';
import { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import http from '../../../http';
import IPrato from '../../../interfaces/IPrato';
import IRestaurante from '../../../interfaces/IRestaurante';
import ITag from '../../../interfaces/ITag';

const FormPrato = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tag, setTag] = useState('')
  const [restaurante, setRestaurante] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>()
  const [tags, setTags] = useState<ITag[]>()
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    http.get<IRestaurante[]>('/v2/restaurantes/')
      .then(resposta => setRestaurantes(resposta.data))
    http.get('/v2/tags/')
      .then(resposta => setTags(resposta.data.tags))
  }, [])

  useEffect(() => {
    if (params.id) {
      http.get<IPrato>(`/v2/pratos/${params.id}/`)
        .then(resposta => {
          setNome(resposta.data.nome)
          setDescricao(resposta.data.descricao)
          setTag(resposta.data.tag)
          setRestaurante(String(resposta.data.restaurante))
        })
    }
  }, [params])

  const aoSelecionarArquivo = (evento: ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0])
    } else {
      setImagem(null)
    }
  }

  const aoSubmeterForm = (evento: SyntheticEvent) => {
    evento.preventDefault()
    let url = '/v2/pratos/'
    let method: Method = 'POST'
    if (params.id) {
      method = 'PUT'
      url += `${params.id}/`
    }
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('descricao', descricao);
    formData.append('tag', tag);
    formData.append('restaurante', restaurante);
    if (imagem) {
      formData.append('imagem', imagem);
    }
    http.request({
      url,
      method,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    }).then(() => {
      navigate('/admin/pratos')
    })
  }
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
        <Box component="form" sx={{ mt: 1 }} onSubmit={aoSubmeterForm}>
          <TextField
            required
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            margin='dense'
            id="nome"
            label="Nome"
            type="text"
            fullWidth />
          <TextField
            required
            value={descricao}
            onChange={evento => setDescricao(evento.target.value)}
            margin='dense'
            id="descricao"
            label="Descrição"
            type="text"
            fullWidth />
          <FormControl margin='dense' fullWidth>
            <InputLabel id="tag-select-label">Tag</InputLabel>
            <Select
              labelId="tag-select-label"
              id="tag-select"
              label="Tag"
              value={tag}
              onChange={evento => setTag(evento.target.value)}
            >
              {tags?.map(tag => <MenuItem key={tag.value} value={tag.value}>{tag.value}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl margin='dense' fullWidth>
            <InputLabel id="restaurante-select-label">Restaurante</InputLabel>
            <Select
              labelId="restaurante-select-label"
              id="restaurante-select"
              label="Restaurante"
              value={restaurante}
              onChange={evento => setRestaurante(evento.target.value)}
            >
              {restaurantes?.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>{restaurante.nome}</MenuItem>)}
            </Select>
          </FormControl>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="imagem-do-prato"
            type="file"
            onChange={aoSelecionarArquivo}
          />
          <label htmlFor="imagem-do-prato">
            <Button variant="outlined" component="span" sx={{ my: 1 }} endIcon={<FileUpload />}>
              Imagem do prato
            </Button>
          </label>
          <Button type='submit' fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </Dashboard>
  );
}

export default FormPrato