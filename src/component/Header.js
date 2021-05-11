import React, { useState, useEffect } from 'react'
import { makeStyles, } from '@material-ui/core/styles';
import { Collapse, ThemeProvider, MuiThemeProvider, createMuiTheme, IconButton, AppBar, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import * as Scroll from 'react-scroll';
import { Link as Scroll } from 'react-scroll';

const theme = createMuiTheme({

    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The default props to change
            disableRipple: true,
            disableTouchRipple: true,
            focusRipple: false,
            border: "none!important",
            outline: "none!important",
            "&:hover": {
                backgroundColor: "transparent"
            }
        },

        MuiIconButton: {
            root: {
                outline: "none!important",
                border: "none!important",
                "&:hover": {
                    backgroundColor: "transparent"
                }
            }

        }
    },
});


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        fontWeight: "bold",
        justifyContent: 'center',
        fontFamily: 'Nunito',
        alignItems: 'center',
        height: '100vh',
        
    },
    appbar: {
        background: 'none',
    },
    icon: {
        fontSize: '2rem',
        color: '#fff',
        outline: "none",
        fontSize: "2rem!important",

    },
    appbarTitle: {
        flexGrow: 1,
        fontWeight: "bold",

    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5Aff3D'
    },
    title: {
        fontWeight: "bold",
        color: '#fff',
        fontSize: '4.5rem',
    },
    container: {
        textAlign: 'center',

    },
    godown: {
        color: '#5Aff3D',
        fontSize: "4rem!important",
    },
    iconbtn:{
        "&:hover": {
            backgroundColor: "transparent"
        },
        "&:focus":{
            outline: "none"
        }
    }


}));
export default function () {
    const classes = useStyles();
    const [checked, setCheck] = useState(false);
    useEffect(() => {
        setCheck(true);
    })

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle} >
                            My<span className={classes.colorText}>Island.</span></h1>

                        <IconButton className={classes.iconbtn}>
                            <SortIcon className={classes.icon} />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Collapse in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50}
                >
                    <div className={classes.container}>
                        <h1 className={classes.title}>Welcome to <br /> My <span className={classes.colorText}>Island.</span></h1>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton className={classes.iconbtn}>
                                <ExpandMoreIcon className={classes.godown} />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>
        </ThemeProvider>
    )
}