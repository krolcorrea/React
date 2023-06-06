import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button, Hidden } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import './Login.css';
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/token/Action";
import { toast } from "react-toastify";

function Login() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [token, setToken] = useState("");

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: ""
    });

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: ""
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token));
            navigate('/home');
        }
    }, [token]);

    useEffect(() => {
        if (respUserLogin.token !== '') {
            dispatch(addToken(respUserLogin.token));
            dispatch(addId(respUserLogin.id.toString()));
            navigate('/home');
        }
    }, [respUserLogin.token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/login`, userLogin, setRespUserLogin);

            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes, não foi possível fazer login', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
                <Box padding={2} >
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Entrar</Typography>
                        <TextField className="loginBox" value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField className="loginBox" value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant="outlined" name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textoCadastro">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textoCadastro">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Hidden smDown>
                <Grid item sm={6} className="imgLogin"></Grid>
            </Hidden>
        </Grid>
    );
}

export default Login;
