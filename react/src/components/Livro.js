import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ButtonAppBar from './Appbar';
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import SaveIcon from '@mui/icons-material/Save';
import validator from 'validator'


export default function Livro() {
    const [titulo, setTitulo]=useState('')
    const [autor, setAutor]=useState('')
    const [editora, setEditora]=useState('')
    const [imgUrl, setImgUrl]=useState('')
    const [ano, setAno]=useState('')
    const [precoCompra, setPrecoCompra]=useState('')
    const [precoVenda, setPrecoVenda]=useState('')
    let navigate = useNavigate();
    const fabStyle = {
      position: 'absolute',
      bottom: 16,
      right: 16,
    };
       

    const handleClick=(e)=>{
        e.preventDefault();
          if ( autor.trim().length === 0 || editora.trim().length === 0 || imgUrl.trim().length === 0 || ano.trim().length === 0) {
            window.alert("Preencha todos os campos obrigatórios");
          } else {
        const livro = {titulo, autor, editora, imgUrl, ano, precoCompra, precoVenda}
        fetch("http://localhost:8080/livro/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(livro)
        }).then(()=>{
            window.alert("Novo livro adicionado")
        }).then(navigate("/"))}
    }

    const [errorMessage, setErrorMessage] = useState('')
    const [errorState, setErrorState] = useState('')
    const validate = (value) => {
      
      if (validator.isURL(value)) {
        setErrorState(false);
        setErrorMessage('');
      } else {
        setErrorState(true);
        setErrorMessage('Insira um url válido');
      }
    }

  return (
    <div>
    <ButtonAppBar nome="Novo Livro" />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        padding: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required fullWidth id="filled-basic" label="Título" variant="filled" value={titulo} onChange={(e)=>setTitulo(e.target.value)} />
      <TextField required fullWidth id="filled-basic" label="Autor" variant="filled" value={autor} onChange={(e)=>setAutor(e.target.value)} />
      <TextField required fullWidth id="filled-basic" label="Editora" variant="filled" value={editora} onChange={(e)=>setEditora(e.target.value)} />
      <TextField required
          error={errorState}
          helperText={errorMessage} fullWidth id="filled-basic" label="Imagem" variant="filled" value={imgUrl} onChange={(e)=> {setImgUrl(e.target.value); validate(e.target.value)}} type="url" />
      <TextField required fullWidth id="filled-basic" label="Ano" variant="filled" value={ano} onChange={(e)=>setAno(e.target.value)} type="number"/>
      <TextField fullWidth id="filled-basic" label="Preço de Compra" variant="filled" value={precoCompra} onChange={(e)=>setPrecoCompra(e.target.value)}  type="number" inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}/>
      <TextField fullWidth id="filled-basic" label="Preço de Venda" variant="filled" value={precoVenda} onChange={(e)=>setPrecoVenda(e.target.value)}  type="number" inputProps={{step: 0.01,}} InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>,}}/>
      <Fab color="primary" aria-label="add" sx={fabStyle}>
      <a href="#" onClick={handleClick}><SaveIcon /></a>
      </Fab>
    </Box>
    </div>
  );
}