import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagens/ListaPostagem';
import './TabPostagens.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ backgroundColor: '#dc3915' }}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre eu" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo" style={{ color: '#481b0f' }}> Olá meu nome é Carolina </Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" style={{ color: '#481b0f' }}> mas pode me chamar de Cau. Tenho 31 anos, moro no centro de são paulo e tenho experiencia nas tecnologias utilizadas na criação da UFA!, estou em transição de carreira pois já fui geografa e  atuei como professora voluntária, garçonete, conferente e monitora, sou versatil, autodidata e dedicada. Sou também fluente em espanhol e aprendiz de inglês. Para mais informações, deixo meu GitHub e LinkedIn.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;