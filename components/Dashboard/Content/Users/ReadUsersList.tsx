import { startTransition, useEffect, useState } from "react";
import {connect} from 'react-redux';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  green, yellow, red, blue } from '@mui/material/colors';
import styles from "../../../../styles/tables/tables.module.css"

import { fetchUsers } from "../../../../redux/actions/users";
const useStyles = makeStyles({
  table: {
      minWidth: 650
  }
});

const ReadUsersList = (props:any) => {
  
  const [didLoad, setDidLoad] = useState(false);
  const [rows, setRows] = useState([])
  const [keys, setKeys] = useState([])

  useEffect(() => {
      props.fetchUsers();
      setRows(props.users);
      setKeys(props.keys);
      setDidLoad(true)
    return () => {
      
    }
  },[didLoad])

  useEffect(()=>{
    console.log("Use efccet para las rows")
    return ()=>{

    }
  },[JSON.stringify(rows)])

  const [searched, setSearched] = useState("");

  const classes = useStyles();

  const requestSearch = (searchedVal:any) => {
    const filteredRows = props.users.filter((row:any) => {
      return row.USER.toLowerCase().includes(searchedVal.toLowerCase());
    });
    console.log(filteredRows);
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  
  const editRow = (props: any)=>{
    console.log(props.currentTarget.id)
  }
  
  // return(
    //   <SearchingTable rows = {rows} keys = {keys}/>
    // )
  
    return(
      <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow >
                {

                        props.keys.map((key:any)=>{
                          return (
                            <TableCell key={key}>{key}</TableCell>
                        )})
                }
                {
                  <TableCell>Acciones</TableCell>
                }
              </TableRow>
            </TableHead>
            <TableBody>
              
            {
              rows.map((row:any) => (
                <TableRow key={row.USER} >
                  <TableCell component="th" scope="row">
                    {row.ID}
                  </TableCell>
                  <TableCell align="right">{row.ID_USUARIO}</TableCell>
                  <TableCell align="right">{row.USER}</TableCell>
                  <TableCell align="right">{row.ROL}</TableCell>
                  <TableCell align="right">{row.NOMBRE_USER}</TableCell>
                  <TableCell align="right">{row.TELEFONO}</TableCell>
                  <TableCell align="right">{row.CORREO}</TableCell>
                  <TableCell align="right" ><EditIcon id={row.ID} sx={{ color: yellow[700] }} className={styles.icon} onClick={(props)=>{editRow(props)}} />            <DeleteIcon id={row.ID} sx={{ color: red[600] }} className={styles.icon} onClick={(props)=>{console.log(props.currentTarget.id)}}/></TableCell>
                </TableRow>
              ))
            }

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      </>
    )
  
  
}

const mapStateToProps = (state : any) => {
  const { users } = state;
  console.log("Usuariosss")
  console.log("Array de usuairo")
  console.log(users);
  let keys = {};
  keys = {... users[1]};
  console.log(keys);
  const userKeys = Object.keys(keys);
  console.log(userKeys);
  return {
    users : Object.values(users),
    keys : userKeys
  }
}

export default connect(
  mapStateToProps,
  {fetchUsers}
)(ReadUsersList);
