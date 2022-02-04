import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IRestaurante from '../../../interfaces/IRestaurante';
import { Grid, IconButton, Link, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Dashboard from '../Dashboard';
import { Link as RouterLink } from 'react-router-dom'

const rows: IRestaurante[] = [{ id: 1, nome: 'Alluroni', pratos: [] }];

const Restaurantes = () => {
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
            to="/admin/restaurantes/novo"
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

export default Restaurantes