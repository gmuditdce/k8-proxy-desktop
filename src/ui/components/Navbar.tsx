import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import { Link}                  from 'react-router-dom'
import HomeIcon                 from '@material-ui/icons/Home';
import PopupBtn                 from './PopupBtn';

const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:               1, 
    },
    navbar:{
        float:                  'right',
            '& ul':{
                padding:        '10px 30px',
                margin:         '0'
            }
    },
    navItem:{
        listStyle:              'none',
        position:               'relative',
        float:                  'left',
            '&:hover':{
                background:     '#144e78',
                borderRadius:   '2px'
            },       
    },   
    navBtn:{
        color:                  '#fff',
        background:             'transparent',
        border:                 'none',       
        float:                  'left',    
        fontSize:               '15px',
        borderRadius:           '3px',
        padding:                '10px 10px',
        textDecoration:         'none',
            '&:focus':{
                border:         '0',
                outline:        '0'
            }     
    },
    matIcon:{
        float:                  'left',
        fontSize:               '20px',
        marginRight:            '3px'
    }        
 }));
 

function Navbar(){
    const classes = useStyles();
   return(
       <div>
            <div className={classes.navbar}>                
                <ul>
                    <li className={classes.navItem}> 
                        <Link className={classes.navBtn} to="/home"><HomeIcon className={classes.matIcon}/> Home</Link>
                    </li>
                    <li className={classes.navItem}> 
                    {/* <button className={classes.navBtn} onClick={handleOpen}><BugReportIcon className={classes.matIcon}/> Report issue</button> */}
                        <PopupBtn/>
                    </li>   
                </ul>
            </div>           
        </div>
    )
}

export default Navbar;