import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./table.css";
import TableFooter from '@material-ui/core/TableFooter';





const useStyles = makeStyles({
  table: {
    maxWidth: 2500,
  },
});

function createData(Name, Reports, Login, Location, Date, Registration, Action) {
  return { Name, Reports, Login, Location, Date, Registration, Action };
}

const rows = [
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled- Disable" ),
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled- Disable" ),
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled- Disable" ),
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled- Disable" ),
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled-Disable" ),
  createData('Esther Howard', 12, "Create", "Indore", "May", "Accepted", "Enabled- Disable" ),
  
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div className="table">
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
                Name</TableCell>
            <TableCell align="right">Reports</TableCell>
            <TableCell align="right">Login</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Registration</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Reports}</TableCell>
              <TableCell align="right">{row.Login}</TableCell>
              <TableCell align="right">{row.Location}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Registration}</TableCell>
              <TableCell align="right">{row.Action}</TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
      <TableFooter>
          <TableRow>
            <TableCell align="left">
                Showing  1to 8 of 30
            </TableCell>
            <TableCell align="right">
                <span id="span">Previous   1   2   3  Next</span>
            </TableCell>
            
          </TableRow>
        </TableFooter>
    </TableContainer>

    

      </div>
    
  );
}
