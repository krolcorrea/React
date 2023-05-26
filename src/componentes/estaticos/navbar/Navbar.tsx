import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Action";

function Navbar() {
    //const [token, setToken] = useLocalStorage('token');

    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuario deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
                <Box className='cursor' >
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Inicio
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/postagens' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioPostagem' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Criar Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>


                </Box>

            </Toolbar>
        </AppBar>

        return (
            <>
                {navbarComponent}
            </>
        )
    }
}
export default Navbar;