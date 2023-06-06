import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagens from '../../componentes/postagens/tabpostagens/TabPostagens';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../componentes/postagens/modalpostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box paddingX={3}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem-vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Link to='/postagens' className='text-decorator-none'>
                        <Box display="flex" justifyContent="center" marginTop={2}>
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Button
                                variant="outlined"
                                className="botao"
                                style={{
                                    color: '#481b0f',
                                    borderColor: '#481b0f',
                                    transition: 'background-color 0.3s, color 0.3s',
                                }}>Ver Postagens</Button>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <img src='https://imgur.com/a/yqrikc4' alt="" width="100%" />
                </Grid>
                <Grid item xs={12} className='caixa'>
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;