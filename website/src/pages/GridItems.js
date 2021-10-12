import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { CardActions, CardHeader, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',

    }

}));



export default function MyGridItems(props) {
    const myStyles = useStyles();
    return (
        <Card>
            <CardHeader title={props.title} subheader={props.subheader} className={myStyles.heading} />
            <CardMedia
                className={myStyles.myImage}
            />
            <CardContent>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    {props.icons}
                </IconButton>
            </CardActions>
        </Card>

    );
}