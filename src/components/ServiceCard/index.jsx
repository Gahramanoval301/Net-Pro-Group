import React from 'react'
import { Grid, Typography, Divider } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './index.module.css'
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, body, image, slug }) => {
    return <Grid item xs={12} sm={6} md={4}>
        <Link className={styles.link} to={`/services/${slug}`}>
            <Card className={styles.card}>
                < CardMedia
                    component="img"
                    alt={title}
                    height="250"
                    image={image}
                    sx={{ p: 2, borderRadius: 5 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6"
                        sx={{
                            minHeight: { xs: '10px', sm: '90px', lg: '60px' }
                        }}
                        component="h6"
                        color='primary'>
                        {title}
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </Grid >

}

export default ServiceCard