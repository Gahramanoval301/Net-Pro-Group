import { Box, Container, Typography } from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from "react-router-dom";

const PageBanner = ({ title, titleHref='', slug, slugTitle='' }) => {
    return (
        <Box bgcolor="primary.main" py={4}
            sx={{
                backgroundImage: `url("/banner-bg.png")`,
                backgroundSize: 'cover',
                backgroundBlendMode: "multiply"
            }}
        >
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                color: 'white'
            }}>
                <Typography fontWeight={600} mb={3} variant="h4">{title}</Typography>
                <Breadcrumbs aria-label="breadcrumb" separator=''>
                    <Link
                        style={{ display: 'flex', alignItems: 'center', color:'white', textDecoration:'none' }}
                        to='/'
                    >
                        Əsas səhifə
                    </Link>
                    <Link
                        style={{ display: 'flex', alignItems: 'center', color:'white', textDecoration:'none' }}
                        to={`/${titleHref}`}
                    >
                        <PlayArrowIcon sx={{ mr: 2 , color:'white'}} />
                        {title}
                    </Link>
                    {
                        slug ? <Link
                            style={{ display: 'flex', alignItems: 'center', color:'white', textDecoration:'none' }}
                            to={`/${titleHref}/${slug}`}
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
