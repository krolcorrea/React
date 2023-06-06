import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Action";
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleMenuClose() {
        setIsMenuOpen(false);
    }

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }


    var navbarComponent;

    if (token !== '') {
        navbarComponent =
            <AppBar position="static" className="orange-navbar">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className="text-decorator-none" variant="h5" color="inherit" component={Link} to="/home">
                        Blog LoCau
                    </Typography>
                </Toolbar>
                <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuClose}>
                    <List>
                        <ListItem button component={Link} to='/home' onClick={handleMenuClose}>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                        <ListItem button component={Link} to='/perfil' onClick={handleMenuClose}>
                            <ListItemText primary="Perfil" />
                        </ListItem>
                        <ListItem button component={Link} to='/postagens' onClick={handleMenuClose}>
                            <ListItemText primary="Postagens" />
                        </ListItem>
                        <ListItem button component={Link} to='/formularioPostagem' onClick={handleMenuClose}>
                            <ListItemText primary="Criar Postagens" />
                        </ListItem>
                        <ListItem button component={Link} to='/temas' onClick={handleMenuClose}>
                            <ListItemText primary="Temas" />
                        </ListItem>
                        <ListItem button component={Link} to='/formularioTema' onClick={handleMenuClose}>
                            <ListItemText primary="Cadastrar Tema" />
                        </ListItem>
                        <ListItem button onClick={goLogout}>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;