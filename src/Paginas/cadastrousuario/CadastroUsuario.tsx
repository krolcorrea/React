import React, { useState, useEffect, ChangeEvent } from "react";
import User from '../../models/User';
import { cadastrar } from "../../services/Service";
import './CadastroUsuario.css'
import { Grid, Typography, Button, TextField, Hidden } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { toast } from "react-toastify";

function CadastroUsuario() {
    let navigate = useNavigate();

    const [cadastrarHovered, setCadastrarHovered] = useState(false);
    const [cancelarHovered, setCancelarHovered] = useState(false);

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login");
            console.log(userResult);
        }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha === user.senha) {
            cadastrar(`/usuarios/cadastrar`, user, setUserResult);
            toast.success('Usuário cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes, Verifique as informações de cadastro', {
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
        <div style={{ height: '100vh' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Hidden smDown>
                    <Grid item className="imgCadastro" xs={6}></Grid>
                </Hidden>
                <Grid item xs={false} sm={6} md={6} lg={6} xl={2} alignItems="center">
                    <Box padding={10} className="cadastro-box" textAlign="center" maxWidth="400px">
                        <form onSubmit={onSubmit}>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" noWrap style={{ fontSize: '30px', fontWeight: 'bold' }}>
                                Cadastre-se
                            </Typography>
                            <TextField
                                value={user.nome}
                                onChange={updatedModel}
                                id="nome"
                                label="Nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        color: '#888',
                                        paddingBottom: '8px'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'box-shadow 0.3s ease'
                                    },
                                    classes: {
                                        focused: 'input-focused',
                                        notchedOutline: 'input-notchedOutline'
                                    }
                                }}
                            />

                            <TextField
                                value={user.usuario}
                                onChange={updatedModel}
                                id="usuario"
                                label="Usuário"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        color: '#888',
                                        paddingBottom: '8px'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'box-shadow 0.3s ease'
                                    },
                                    classes: {
                                        focused: 'input-focused',
                                        notchedOutline: 'input-notchedOutline'
                                    }
                                }}
                            />

                            <TextField
                                value={user.foto}
                                onChange={updatedModel}
                                id="foto"
                                label="Foto"
                                variant="outlined"
                                name="foto"
                                margin="normal"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        color: '#888',
                                        paddingBottom: '8px'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'box-shadow 0.3s ease'
                                    },
                                    classes: {
                                        focused: 'input-focused',
                                        notchedOutline: 'input-notchedOutline'
                                    }
                                }}
                            />

                            <TextField
                                value={user.senha}
                                onChange={updatedModel}
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type="password"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        color: '#888',
                                        paddingBottom: '8px'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'box-shadow 0.3s ease'
                                    },
                                    classes: {
                                        focused: 'input-focused',
                                        notchedOutline: 'input-notchedOutline'
                                    }
                                }}
                            />

                            <TextField
                                value={confirmarSenha}
                                onChange={confirmarSenhaHandle}
                                id="confirmarSenha"
                                label="Confirmar Senha"
                                variant="outlined"
                                name="confirmarSenha"
                                margin="normal"
                                type="password"
                                fullWidth
                                InputLabelProps={{
                                    style: {
                                        color: '#888',
                                        paddingBottom: '8px'
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        background: '#fff',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'box-shadow 0.3s ease'
                                    },
                                    classes: {
                                        focused: 'input-focused',
                                        notchedOutline: 'input-notchedOutline'
                                    }
                                }}
                            />

                            <Box marginTop={2} textAlign="center" display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }}>
                                <Button
                                    variant="outlined"
                                    className="btnCadastrar"
                                    style={{
                                        color: cadastrarHovered ? '#ffffff' : '#ffffff',
                                        backgroundColor: cadastrarHovered ? '#481b0f' : '#ff5722',
                                        borderColor: '#481b0f',
                                        transition: 'background-color 0.3s, color 0.3s',
                                    }}
                                    onMouseEnter={() => setCadastrarHovered(true)}
                                    onMouseLeave={() => setCadastrarHovered(false)}
                                >
                                    Cadastrar
                                </Button>
                                <Box marginTop={{ xs: 1, sm: 0 }} marginLeft={{ sm: 1 }}>
                                    <Link to="/login">
                                        <Button
                                            variant="outlined"
                                            className="btnCancelar"
                                            style={{
                                                color: cancelarHovered ? '#ffffff' : '#ffffff',
                                                backgroundColor: cancelarHovered ? '#ff5722' :'#481b0f',
                                                borderColor: '#481b0f',
                                                transition: 'background-color 0.3s, color 0.3s',
                                            }}
                                            onMouseEnter={() => setCancelarHovered(true)}
                                            onMouseLeave={() => setCancelarHovered(false)}
                                        >
                                            Cancelar
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default CadastroUsuario;
