import { Email, LocationOn, Phone } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Container, Divider, Grid, Stack, Typography, alpha } from "@mui/material";
import Link from '../Link';

const links = [
    { title: "Əsas səhifə", to: '/' },
    { title: "Haqqımızda", to: '/about' },
    { title: "Məhsullar", to: '/products' },
    { title: "Xidmətlər və Həllər", to: '/services' },
    { title: "Qalereya və Bloq", to: '/blog' },
    { title: "Əlaqə", to: '/contact' }
]
const Footer = () => {
    return (
        <Box bgcolor="primary.main">
            <Container sx={{ color: 'white' }}>
                <Grid container py={3}>
                    <Grid item p={1} xs={12} sm={6} md={3}>
                        <Stack justifyContent="space-around" height={"100%"}>
                            <Box maxWidth={130}>
                                <img style={{ width: '100%' }} src="/logo.png" alt="" />
                            </Box>
                            <Stack gap={0.7} flexDirection="row" sx={{ mx: 1 }}>
                                <a href="https://www.facebook.com/?locale=az_AZ" style={{color:'white'}}>
                                <FacebookIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                </a>
                                <a href="https://www.linkedin.com/in/leman-gahramanova-3871a42a7/" style={{color:'white'}}>
                                <LinkedInIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                </a>
                                <a href="" style={{color:'white'}}>
                                <InstagramIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                </a>
                                <a href="" style={{color:'white'}}>
                                <WhatsAppIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                </a>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item p={1} xs={12} sm={6} md={3}>
                        <Typography mb={2} variant='h5'>Saytın xəritəsi</Typography>
                        <Stack
                            sx={{
                                "& a": {
                                    my: 0.4,
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: 'absolute',
                                        width: 0,
                                        height: 0,
                                        border: "8px solid",
                                        borderColor: "transparent transparent transparent " + alpha("#fff", 0.5),
                                        left: -13,
                                        top: 1.3
                                    }
                                }
                            }}>
                            {
                                links.map(({ title, to }) => {
                                    return (
                                        <Link key={to} to={to} title={title} />
                                    )
                                })
                            }
                        </Stack>
                    </Grid>
                    <Grid item p={1} xs={12} sm={6} md={3}>
                        <Typography mb={2} variant='h5'>Əlaqə</Typography>
                        <Typography mb={1} variant='h5'><Phone sx={{ mr: 2 }} />Telefon</Typography>
                        <a href="tel:+99450 5754080" style={{ color: alpha("#fff", 0.5), textDecoration: "none", display:'block' }}>
                            +99450 5754080
                        </a>
                        <a href="tel:+99450 5754070" style={{ color: alpha("#fff", 0.5), textDecoration: "none" }}>
                            +99450 5754070
                        </a>
                        <Typography mt={4} mb={1} variant='h5'><Email sx={{ mr: 2 }} />Email</Typography>
                        <a href="mailto:info@netprogroup.az" style={{ color: alpha("#fff", 0.5), textDecoration: "none" }}>info@netprogroup.az</a>
                    </Grid>
                    <Grid item p={1} xs={12} sm={6} md={3}>
                        <Typography mb={1} variant='h5'><LocationOn sx={{ mr: 2 }} />Ünvan</Typography>
                        <Typography color={alpha("#fff", 0.5)}>
                            Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
                        </Typography>
                        <iframe style={{
                            border: 0,
                            width: '100%',
                            marginTop: 30
                        }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5964001322254!2d49.90569791173867!3d40.417790971320315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030635c979bcb1d%3A0xfa39683687982543!2sJED%20Academy%20Koroglu!5e0!3m2!1sen!2saz!4v1701328081704!5m2!1sen!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </Grid>
                </Grid>
                <Divider sx={{ bgcolor: alpha("#fff", 0.5), mb: 2 }} />
                <Stack pb={2} flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                    <Typography color={alpha("#fff", 0.9)}>Copyright © NETPRO GROUP MMC - 2022</Typography>
                    <Typography color={alpha("#fff", 0.9)}>Site by Leman Gahramanova</Typography>
                </Stack>
            </Container>
        </Box>
    )
}
export default Footer
