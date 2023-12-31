import React from 'react'
import { Typography, Container, Grid } from '@mui/material/'
import { gallery } from './images'
import styles from './index.module.css'
import ImageCard from './imageCards';

const Gallery = () => {

    return (
            <Container className={styles.container}
                sx={{
                    py: { xs: 4, sm: 6 }
                }}>
                <Typography variant="h4" component='h4' color="primary"
                    sx={{ mb: 3 }}>
                    Qaleriya
                </Typography>
                <Grid container spacing={1}>
                    {
                        gallery.map(({ id, image }) => {
                            return <Grid item key={id} xs={12} sm={6} md={3}>
                                <ImageCard image={image} />
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
    )
}

export default Gallery