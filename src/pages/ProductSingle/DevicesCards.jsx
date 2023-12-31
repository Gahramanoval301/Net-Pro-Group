import React from 'react'
import { Box, Grid, Link, Stack, Typography, Divider, CardActions, Icon } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import styles from './index.module.css'
const DevicesCards = ({ name, body, image }) => {
    return (
        <Card sx={{
            display: 'flex',
            padding: '20px',
            borderRadius: '8px',
            bgcolor: 'info.main'
        }} elevation={4}>
            <Stack flexDirection='row'
                className={styles.CardContainer}>
                <img src={image} width='190px' height='auto'
                    className={styles.deviceImg}
                    alt={`${name} image`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                        component="h5"
                        color={'primary'}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="primary">
                        {body}
                    </Typography>
                </CardContent>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    sx={{
                        '@media (max-width: 650px)': {
                            display: 'none'
                        },
                    }}
                />
                <Divider
                    orientation="horizontal"
                    variant="fullWidth"
                    sx={{
                        '@media (max-width: 650px)': {
                            display: 'block'
                        },
                    }}
                />
                <CardActions sx={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'space-between',
                    height: '50%'
                }} >
                    <Typography variant="h6" color="primary">
                        Download
                    </Typography>
                    <Box sx={{
                        display: 'flex', fontSize: '16px'
                    }}>
                        <PictureAsPdfIcon color='primary' />
                        <Link href="#" underline="always" color={'primary'}>
                            Brochure.pdf
                        </Link>
                    </Box>
                </CardActions>
            </Stack>
        </Card>
    )
}

export default DevicesCards