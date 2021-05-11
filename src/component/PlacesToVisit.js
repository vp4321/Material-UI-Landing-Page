import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import places from './static/places'
import ImageCard from './ImageCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));
export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root} id="place-to-visit">
            <ImageCard place={places[0]}  />
            <ImageCard place={places[1]}  />
        </div>
    )
}