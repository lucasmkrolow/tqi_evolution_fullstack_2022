import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonAppBar from './Appbar';
import { useNavigate, useParams } from "react-router-dom";
import Fab from '@mui/material/Fab';
import SaveIcon from '@mui/icons-material/Save';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';

export default function Compra() {
    var [idDoLivro, setIdDoLivro]=useState('')
    const [qtde, setQtde]=useState('')
    const [valor, setValordoLivro]=useState('')
    let navigate = useNavigate();
    const fabStyle = {
      position: 'absolute',
      bottom: 16,
      right: 16,
    };
    const {idDoLivroParam} = useParams()

    const [livros, setLivros]= useState([])
  
    useEffect(() => {
      fetch("http://localhost:8080/livro/getAll")
      .then(response=>response.json())
      .then((result)=>{
        setLivros(result);
      }
      )
    }, []);
    const handleChange = (event: SelectChangeEvent) => {
      setIdDoLivro(event.target.value);
    };

    const handleClick=(e)=>{
        e.preventDefault();
        if ( idDoLivro === undefined || qtde.trim().length === 0 || valor.trim().length === 0) {
          window.alert("Preencha todos os campos obrigatórios");
        } else {
        if (idDoLivroParam != undefined) {
          idDoLivro =idDoLivroParam;
        }
        const compra = { idDoLivro, qtde, valor}
        fetch("http://localhost:8080/compra/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(compra)
        }).then(()=>{
            window.alert("Nova compra adicionada")
        }).then(navigate("/compras"))}
    }
  
    var valorNoDB = '-'
  return (
    <div>
    <ButtonAppBar nome="Nova Compra" />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        padding: 5,
      }}
      noValidate
      autoComplete="off"
    >
        <FormControl variant="filled" sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-filled-label">Livro *</InputLabel>
        <Select 
        required
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={(idDoLivroParam != undefined) ? idDoLivroParam : idDoLivro}
          disabled={(idDoLivroParam != undefined) ? true : false}
          onChange={handleChange}
        >
        {(idDoLivroParam !== undefined) ? 
           livros.filter(livro => livro.id == idDoLivroParam).map( (livro) => <MenuItem key={livro.id} value={livro.id}>{livro.titulo}</MenuItem>) :
           livros.map( (livro) => <MenuItem key={livro.id} value={livro.id}>{livro.titulo}</MenuItem>)}


        </Select></FormControl>
        {(idDoLivroParam != undefined) ? livros.filter(livro => livro.id == idDoLivroParam).map( (livro) =>  {valorNoDB = livro.precoCompra}) : livros.filter(livro => livro.id === idDoLivro).map( (livro) =>  {valorNoDB = livro.precoCompra})}
      <TextField required fullWidth  id="filled-basic" label="Qtde." variant="filled" value={qtde} onChange={(e)=>setQtde(e.target.value)} type="number" />
      <TextField required fullWidth  id="filled-basic" label="Valor Unitário" variant="filled" value={valor} placeholder={''+valorNoDB} onChange={(e)=>setValordoLivro(e.target.value)}inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}} type="number"  />
      <TextField fullWidth id="filled-basic" label="Valor Total" variant="filled" value={qtde*valor} disabled inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}/>
      <Fab color="primary" aria-label="add" sx={fabStyle}>
      <a href="#" onClick={handleClick}><SaveIcon /></a>
      </Fab>
    </Box>
    </div>
  );
}