import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IPrato from '../../../interfaces/IPrato';
import { Delete, Edit } from '@mui/icons-material';
import Dashboard from '../Dashboard';
import { Grid, IconButton, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import http from '../../../http';

const Pratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>()
  useEffect(() => {
    http.get<IPrato[]>('/v2/pratos/')
      .then(resposta => setPratos(resposta.data))
  }, [])
  const remover = (prato: IPrato) => {
    http.delete(`/v2/pratos/${prato.id}/`)
      .then(() => {
        if (pratos) {
          setPratos([
            ...pratos.filter(x => x.id !== prato.id)
          ])
        }
      })
  }
  return (
    <Dashboard>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h6">
            Pratos
          </Typography>
        </Grid>
        <Grid item>
          <Link
            variant="button"
            component={RouterLink}
            to="/admin/pratos/novo"
          >
            Novo
          </Link>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell colSpan={2}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pratos?.map((prato) => (
              <TableRow key={prato.id}>
                <TableCell>
                  {prato.nome}
                </TableCell>
                <TableCell>
                  {prato.descricao}
                </TableCell>
                <TableCell>
                  <Link
                    variant="button"
                    component={RouterLink}
                    to={`/admin/pratos/${prato.id}`}
                  >
                    <IconButton aria-label="editar">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="deletar" onClick={() => remover(prato)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dashboard>
  );
}

export default Pratos