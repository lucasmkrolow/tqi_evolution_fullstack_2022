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


export default function Venda() {
    const [cpfCnpjCliente, setCpf]=useState('')
    const [nomeCliente, setNome]=useState('')
    var [idDoLivro, setIdDoLivro]=useState('')
    const [qtde, setQtde]=useState('')
    const [valorDoLivro, setValordoLivro]=useState('')
    const [valorTotal, setValorTotal]=useState('')
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
          if(qtde>qtdeEstoque) {
            window.alert("Estoque Insuficiente")
          } else {
            e.preventDefault();
            if ( cpfCnpjCliente.trim().length === 0 || nomeCliente.trim().length === 0 || idDoLivro === undefined || qtde.trim().length === 0  || valorDoLivro.trim().length === 0) {
              window.alert("Preencha todos os campos obrigatórios");
            } else {
          let valorTotal = qtde*valorDoLivro;
          if (idDoLivroParam != undefined) {
            idDoLivro =idDoLivroParam;
          }
          const venda = {cpfCnpjCliente, nomeCliente, idDoLivro, qtde, valorDoLivro, valorTotal}
          fetch("http://localhost:8080/venda/add", {
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(venda)
          }).then(()=>{
              window.alert("Nova venda adicionada")
          }).then(navigate("/vendas"))}}
    }
    var qtdeEstoque
    var valorNoDB = '-' 
    
  return (
    <div>
    <ButtonAppBar nome="Nova Venda" />
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
{(idDoLivroParam != undefined) ? 
  livros.filter(livro => livro.id == idDoLivroParam).map( (livro) => <MenuItem key={livro.id} value={livro.id} >{livro.titulo} - ({livro.estoque}) em estoque</MenuItem>)
  :
  livros.map( (livro) => <MenuItem key={livro.id} disabled={(livro.estoque<1)} value={livro.id} >{livro.titulo} - ({livro.estoque}) em estoque</MenuItem>) }


        </Select></FormControl>
      {(idDoLivroParam != undefined) ?  livros.filter(livro => livro.id == idDoLivroParam).map( (livro) =>  {qtdeEstoque = livro.estoque}) :livros.filter(livro => livro.id == idDoLivro).map( (livro) =>  {qtdeEstoque = livro.estoque}) }
      {(idDoLivroParam != undefined) ?  livros.filter(livro => livro.id == idDoLivroParam).map( (livro) =>  {valorNoDB = livro.precoVenda}) : livros.filter(livro => livro.id == idDoLivro).map( (livro) =>  {valorNoDB = livro.precoVenda}) }
      <TextField required fullWidth id="filled-basic" label="CPF/CNPJ do cliente" variant="filled" value={cpfCnpjCliente} onChange={(e)=>setCpf(e.target.value)} type="number" inputProps={{step: 1, }} />
      <TextField required fullWidth id="filled-basic" label="Nome do cliente" variant="filled" value={nomeCliente} onChange={(e)=>setNome(e.target.value)} />
      <TextField required fullWidth id="filled-basic" label="Qtde." variant="filled" onChange={(e)=>setQtde(e.target.value)} type="number" />
      <TextField required fullWidth id="filled-basic" label="Valor Unitário" variant="filled" value={valorDoLivro} placeholder={''+valorNoDB} onChange={(e)=>setValordoLivro(e.target.value)}inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}} type="number"/>
      <TextField fullWidth id="filled-basic" label="Valor Total" variant="filled" value={qtde*valorDoLivro} onChange={(e)=>setValorTotal(e.target.value)} disabled inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}type="number"/>
      
      
      <Fab color="primary" aria-label="add" sx={fabStyle}>
      <a href="#" onClick={handleClick}><SaveIcon /></a>
      </Fab>
    </Box>
    </div>
  );
}