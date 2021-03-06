import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import      Footer              from '../components/Footer';
import SideDrawer               from '../components/SideDrawer';

/** Main view of the application to display all the targeted use cases */
const useStyles = makeStyles((theme) => ({
     root:       {
        display:         'flex', 
        flexFlow:        'wrap'
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

    },
    toolbar: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'flex-end',
        padding:        theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow:       1,
    },
    contentArea:{
         minHeight:      '81vh',
         padding:        theme.spacing(3),
    }
  }));

function MainLayout (){
    const classes = useStyles(); 
    return(  
        <div className={classes.root}>     
            <SideDrawer showBack={false}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.contentArea}>
                    <h2>TBD</h2>    
                </div>
                <Footer/>
            </main>
        </div>
    )
}

export default MainLayout;
