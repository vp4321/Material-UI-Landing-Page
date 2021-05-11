import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBView } from "mdbreact";



const useStyles = makeStyles({

    root: {
        maxWidth: 645,
        background: "rgba(0,0,0,0.5)",
        margin: "20px"
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#fff",

    },
    description: {
        fontFamily: 'Nunito',

        fontSize: "1.1rem",
        color: "#ddd",
    }
});

export default function ImageCard({ place }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} data-aos="fade-up">
            <MDBView hover zoom>
                <CardMedia
                    className={`${classes.media} hover-zoom`}
                    image={place.imageUrl}
                />
            </MDBView>
            <CardContent>
                <Typography gutterBottom component="h1" className={classes.title}>
                    {place.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    {place.description}
                </Typography>
            </CardContent>

        </Card>
    );
}
