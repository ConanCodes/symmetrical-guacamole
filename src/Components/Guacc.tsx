import { PureComponent } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

/**Advice/Todo
 * Nothing jumps out to me right away here except our class name doesnt match our file name
 * Your table isnt populating, if we check the console it shows "Each child in a list should have a unique "key" prop."
 * Using that as a que to where to look take a look through this component and see where the issue is
 * 
 * hint: You changed the name of the create data rows from the basicTable component
 *        Dont be afraid to place a console log inside the render to see what rows returns
 */

export default class Guac extends PureComponent {

  createData(one: string, two: number, three: number, four: number, five: number,) {
    return { one, two, three, four, five, };
  }

  render() {

    const rows = [
      this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      this.createData('Eclair', 262, 16.0, 24, 6.0),
      this.createData('Cupcake', 305, 3.7, 67, 4.3),
      this.createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Numbers</TableCell>
                <TableCell align="right">one</TableCell>
                <TableCell align="right">two&nbsp;</TableCell>
                <TableCell align="right">three&nbsp;</TableCell>
                <TableCell align="right">four&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.one}
                  </TableCell>
                  <TableCell align="right">{row.two}</TableCell>
                  <TableCell align="right">{row.three}</TableCell>
                  <TableCell align="right">{row.four}</TableCell>
                  <TableCell align="right">{row.five}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/">Home</Link>
        <Link to="/basictable">Basic Table</Link>
        <Link to="/alert">Alert</Link>


      </>

    );
  }
}