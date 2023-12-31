import React from 'react'
import { Typography, Box, Container, Stack, Grid, Button } from '@mui/material/'
import PageContainer from '../../components/PageContainer'
import styles from './index.module.css'
import { ArrowLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <PageContainer>
            <Box className={styles.containerBg}>
                <Container sx={{ py: { xs: 4, sm: 6 } }}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={2} alignItems={'center'} justifyContent={'center'} sx={{ textAlign: 'center' }}>
                                <Box sx={{}}>
                                    <img src="public/NotFoundImages/404.svg" alt="404 not found" />
                                </Box>
                                <Typography color="primary" variant='h5' sx={{width:'50%'}}>
                                    Axtardığınız Səhifə Tapılmadı!
                                </Typography>
                                <Button className={styles.button} variant='outlined'>
                                    <ArrowLeft />
                                    <Link to='/'>Əsas səhifəyə qayıt</Link>
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack className={styles.imageBox} alignItems={'center'} >
                                <img src="public/NotFoundImages/error.png" alt="error" width={'100%'} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </PageContainer>
    )
}

export default NotFound