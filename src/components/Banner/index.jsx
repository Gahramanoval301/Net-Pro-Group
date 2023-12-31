import { Box, Container, Typography } from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from "react-router-dom";
import styles from './index.module.css'

const PageBanner = ({ title, titleHref = '', slug, slugTitle = '' }) => {
    return (
        <Box className={styles.containerBox} bgcolor="primary.main" py={4}
            sx={{
                backgroundImage: `url("/banner-bg.png")`,
                backgroundSize: 'cover',
                backgroundBlendMode: "multiply"
            }}
        >
            <Container className={styles.container}>
                <Typography fontWeight={600} mb={3} variant="h4" component='h4'>
                    {title}
                </Typography>
                <Breadcrumbs aria-label="breadcrumb" separator=''>
                    <Link className={styles.link} to='/'>
                        Əsas səhifə
                    </Link>
                    <Link className={styles.link} to={`/${titleHref}`}>
                        <PlayArrowIcon sx={{ mr: 2, color: 'white' }} />
                        {title}
                    </Link>
                    {
                        slug ? <Link className={styles.link} to={`/${titleHref}/${slug}`}
                        >
                            <PlayArrowIcon sx={{ mr: 2 }} />
                            {slugTitle}
                        </Link> : null
                    }
                </Breadcrumbs>
            </Container>
        </Box>
    )
}
export default PageBanner
