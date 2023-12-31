import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Box, Container, Grid, Typography, Stack } from "@mui/material"
import services from '../../mockData/services'
import ServiceCard from '../../components/ServiceCard'

const Services = () => {
    return (
        <PageContainer bannerTitle='Xidmətlər və Həllər' titleHref='xidmətlər-və-həllər'>
            <Container sx={{ py: 5 }}>
                <Stack spacing={3}>
                    <Typography variant="h4" color="primary">
                        Xidmətlər və Həllərin növləri
                    </Typography>
                    <Grid container spacing={1}>
                        {
                            services.map(({ id, title, body, image, slug }) => {
                                return <ServiceCard key={id}
                                    title={title}
                                    body={body}
                                    image={image}
                                    slug={slug} />
                            })
                        }
                    </Grid>
                </Stack>
            </Container>
        </PageContainer>
    )
}

export default Services