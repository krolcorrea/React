import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import fotoHome from '../../assets/img/nobanco.jpg';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagens from '../../componentes/postagens/tabpostagens/TabPostagens';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Link to='/postagens' className='text-decorator-none'>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} >
                    <img src={fotoHome} alt="" width="500px" height="500px" />
                </Grid>
                <Grid item xs={12} className='postagens'>
                    <TabPostagens/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;