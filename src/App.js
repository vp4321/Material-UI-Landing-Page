import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './component/Header';
import PlacesToVisit from './component/PlacesToVisit'
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme)=>({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.jpg'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }

}));
export default function(){
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return(
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlacesToVisit />
    </div>
  )
}
