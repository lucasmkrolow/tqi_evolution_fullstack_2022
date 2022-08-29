import React from 'react';
import { DataGrid, GridColDef, GridToolbar, ptBR  } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';  
import Box from '@mui/material/Box';
import ButtonAppBar from './Appbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



export default function ListaLivros() {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  const linkStyle = {
    color: 'black', 
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, disableClickEventBubbling: true, },
    { field: 'titulo', headerName: 'Título', width: 130, disableClickEventBubbling: true, },
    { field: 'autor', headerName: 'Autor', width: 130, disableClickEventBubbling: true, },
    { field: 'editora', headerName: 'Editora', width: 130, disableClickEventBubbling: true, },
    { field: 'imgUrl', headerName: 'Imagem', width: 130, disableClickEventBubbling: true, renderCell: (cellValues) => {return <a href={cellValues.row.imgUrl} target="_blank" style={linkStyle}><img src={cellValues.row.imgUrl} height='80'/></a>}},
    { field: 'ano', headerName: 'Ano', width: 130, disableClickEventBubbling: true, },
    { field: 'estoque', headerName: 'Estoque', width: 130, disableClickEventBubbling: true, },
    { field: 'precoCompra', headerName: 'Preço de Compra', width: 130, disableClickEventBubbling: true, },
    { field: 'precoVenda', headerName: 'Preço de Venda', width: 130, disableClickEventBubbling: true, },
    {field: 'comprar', headerName: '', type: 'actions', width: 50, renderCell: (cellValues) => {
      return <Link to={`novacompra/${cellValues.row.id}`} title='Compra deste Livro'><LoginIcon style={linkStyle}  /></Link>;
    }},
    {field: 'vender', headerName: '', type: 'actions', width: 50, renderCell: (cellValues) => {if (cellValues.row.estoque>0)
      return <Link to={`novavenda/${cellValues.row.id}`} title='Venda deste Livro'><LogoutIcon style={linkStyle}  /></Link>;
    }}
  ];
  const [livros, setLivros]= useState([])
  
  useEffect(() => {
    fetch("http://localhost:8080/livro/getAll")
    .then(response=>response.json())
    .then((result)=>{
      setLivros(result);
    }
    )
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <ButtonAppBar nome="Livros" />
    <div style={{ top: '64px', bottom: '0', width: '100%', position: 'absolute' }}>
      <DataGrid
        rowHeight={80}
        rows={livros}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
    <Box sx={fabStyle} title="Novo Livro">
      <Fab color="primary" aria-label="add">
      <Link to="/novolivro"><AddIcon /></Link>
      </Fab>
      </Box>
    </div>
  );
}