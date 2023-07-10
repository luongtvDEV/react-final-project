import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/joy';
import { GET_ID_PRODUCT } from '../store/actions';
import { AppConsumer } from '../store';
import { Link as LinkApp } from 'react-router-dom';
export default function TableApp({ dataProduct, column, deleteProduct }) {

  const [state, dispatch] = AppConsumer();
  const getProductById = (id) => {
    dispatch(GET_ID_PRODUCT(id))
  }
  const deleteProductById = (id) => {
    deleteProduct(id);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {column.map(column => (
              <TableCell key={column}>{column}</TableCell>

            ))}

          </TableRow>
        </TableHead>
        <TableBody>
          {dataProduct.map(row => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >
                <LinkApp to={`${row.id}`}>
                  {row.productName}
                </LinkApp>
              </TableCell>


              <TableCell >{row.price}</TableCell>
              <TableCell >{row.quantity}</TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >
                <Button variant="outlined" onClick={() => getProductById(row.id)}>
                  Edit
                </Button>
                <Button variant="outlined" onClick={() => deleteProductById(row.id)} >
                  Delete
                </Button>
              </TableCell>
            </TableRow>

          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
