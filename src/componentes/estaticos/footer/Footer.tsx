import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";

function Footer() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Box className="fundo">
                    <Box className="boxRedes">
                        <Box paddingTop={1} display="flex" alignItems="center" className='redesSociais' justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/krolcorrea" target="_blank">
                                <GitHubIcon className="redesSociais" />
                            </a>
                            <a href="https://www.instagram.com/krol.correa/" target="_blank">
                                <InstagramIcon className="redesSociais" />
                            </a>
                            <a href="https://www.linkedin.com/in/caucorreasilva/" target="_blank">
                                <LinkedInIcon className="redesSociais" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="boxAutoral">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textoAutoral">© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        return (

            <>
                {footerComponent}
            </>
        )
    }
}
export default Footer;