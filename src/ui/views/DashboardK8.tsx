import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import Header                   from '../components/Header';
import Sidebar                  from '../components/SideBar'
import Footer                   from '../components/Footer';


/** Main view of the application to display all the targeted use cases */
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
        minHeight:      '86vh'
    },
   gridItemLeft:{
   }
 }));


function DashboardK8(){
    const classes = useStyles(); 
    return(
        <div>     
        <Header showBack={false} ></Header>            
        <Container className={classes.fullWidth}>              
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.gridItemLeft}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item xs={9} className={classes.gridItemRight}>
                    <h2>TBD</h2>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </div>
        
    )
}

export default DashboardK8;