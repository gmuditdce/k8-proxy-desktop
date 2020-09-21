import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import      Header              from '../components/Header'
import      Sidebar             from '../components/SideBar'
import WebIFrameView            from '../components/WebIFrameView'
import { useState, useEffect }  from 'react';
import Loader                   from '../components/Loader';


const useStyles = makeStyles((theme) => ({
     root:       {
         flexGrow:       1, 
     },
     fullWidth:{
         maxWidth:       '100%'
     },
     container:  {
         display:        'grid',
         gridGap:        theme.spacing(2),
     },
    gridItemRight:{
    },
    gridItemLeft:{
    }
  }));

function FileDrop (){
    const classes = useStyles();
    
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      setTimeout(() => { setShowLoader(false);},500);
    }, []); 

    return(
        <div>     
            <Header showBack={false} ></Header>            
            <Container className={classes.fullWidth}>              
                <Grid container spacing={2}>
                    <Grid item xs={3} className={classes.gridItemLeft}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid item xs={9} className={classes.gridItemRight}>
                    {showLoader  && <Loader/> }  
                     <WebIFrameView url = "https://file-drop.co.uk/" />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default FileDrop;
