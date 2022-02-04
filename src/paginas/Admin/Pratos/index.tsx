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

const rows: IPrato[] = [{ id: 1, nome: 'Feijoada Smith', tag: '', descricao: 'A feijoada é um dos pratos típicos mais conhecidos e populares da culinária brasileira.', imagem: '', restaurante: 1 }];

const Pratos = () => {
  return (
    <Dashboard>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h6">
            Restaurantes
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.nome}
                </TableCell>
                <TableCell>
                  {row.descricao}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="editar">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="deletar">
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