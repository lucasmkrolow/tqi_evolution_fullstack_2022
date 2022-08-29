import React from 'react';
import { DataGrid, GridColDef, GridToolbar, ptBR } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ButtonAppBar from './Appbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';



export default function ListaCompras() {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  const [livros, setLivros]= useState([])
  useEffect(() => {
    fetch("http://localhost:8080/livro/getAll")
    .then(response=>response.json())
    .then((result)=>{
      setLivros(result);
    }
    )
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, disableClickEventBubbling: true, },
    { field: 'idDoLivro', headerName: 'Nome do Livro', width: 300, disableClickEventBubbling: true, renderCell: (cellValues) => <p>{livros.filter(livro => livro.id == cellValues.row.idDoLivro).map( (livro) => livro.titulo + ' (ID: ' + livro.id + ')')} </p>},
    { field: 'qtde', headerName: 'Qtde.', width: 70, disableClickEventBubbling: true, },
    { field: 'valor', headerName: 'Valor do Livro', width: 130, disableClickEventBubbling: true, },
  ];
  const [compras, setCompras]= useState([])
  
  useEffect(() => {
    fetch("http://localhost:8080/compra/getAll")
    .then(response=>response.json())
    .then((result)=>{
      setCompras(result);
    }
    )
  }, []);

  return (
    <div>
    <ButtonAppBar nome="Compras" />
    <div style={{ top: '64px', bottom: '0', width: '100%', position: 'absolute' }}>
      <DataGrid
        rows={compras}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
    <Box sx={fabStyle} title="Nova Compra">
      <Fab color="primary" aria-label="add">
      <Link to="/novacompra"><AddIcon /></Link>
      </Fab>
      </Box>
    </div>
  );
}