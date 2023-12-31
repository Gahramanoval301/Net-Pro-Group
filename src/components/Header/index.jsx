import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Navigation from "../../components/Navigation"
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import styles from './index.module.css';
import DropdownContent from './DropdownContent';

export function Header() {
    const [toggle, setToggle] = React.useState(false)
    const [money, setMoney] = React.useState('');
    const [country, setCountry] = React.useState('');

    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    const handleChange = (e) => {
        setMoney(e.target.value);
    };
    const handleChange2 = (e) => {
        setCountry(e.target.value);
    };
    return (
        <Box className={styles.containerBox} >
            <AppBar position="static"
                sx={{
                    ".MuiToolbar-root": {
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }
                }}
            >
                <Toolbar>
                    <div className={styles.dropdown} onClick={handleToggle}>
                        <div className={styles.dropdownBtn}>informasiyalar</div>
                        {toggle && <DropdownContent />}
                    </div>
                    <Box className={styles.informations} sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        flexWrap: 'wrap', padding: '1rem 0', gap: 1, margin: '0 auto'
                    }}>
                        <Box>
                            <a href="https://go.2gis.com/0e49l" style={{
                                color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <LocationOnIcon sx={{ marginRight: 1 }} />
                                Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
                            </a>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                                < WhatsAppIcon sx={{ marginRight: 1 }} />
                                <a href="tel:+994505754080" style={{
                                    color: 'white', textDecoration: 'none', marginRight: 10
                                }}>+994505754080</a>
                                <a href="tel:+994505754070" style={{
                                    color: 'white', textDecoration: 'none'
                                }}>+994505754070</a>
                            </Box>
                        </Box>
                        <Box>
                            <a href="mailto:info@netprogroup.az" style={{
                                color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                < MailIcon sx={{ marginRight: 1 }} />
                                info@netprogroup.az
                            </a>
                        </Box>
                        <Stack gap={0.7} flexDirection="row" sx={{ mx: 1 }}>
                            <a href="https://www.facebook.com/?locale=az_AZ" style={{
                                color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <FacebookIcon sx={{
                                    border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3
                                }} />
                            </a>
                            <a href="https://www.linkedin.com/in/leman-gahramanova-3871a42a7/" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <LinkedInIcon sx={{
                                    border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3
                                }} />
                            </a>
                            <a href="" style={{
                                color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <InstagramIcon sx={{
                                    border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3
                                }} />
                            </a>
                            <a href="" style={{
                                color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <WhatsAppIcon sx={{
                                    border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3
                                }} />
                            </a>
                        </Stack>
                        <FormControl sx={{
                            minWidth: 120, "& fieldset": {
                                border: '1px solid white !important',
                                outline: "none",
                            },
                        }}>
                            <Select name='value'
                                sx={{
                                    ".MuiSelect-select": {
                                        py: "10px !important",
                                    },
                                    "& svg": {
                                        color: "white"
                                    },
                                    color: 'white',
                                    border: 'none',
                                    outline: 'none',
                                    margin: '0 0.5rem'

                                }}
                                value={money}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                IconComponent={() => <ArrowDownward color="white" style={{ cursor: 'pointer', position: 'relative', right: 5 }} />}
                            >
                                <MenuItem value=""> 1 USD - 1.700 AZN ⏺️</MenuItem>
                                <MenuItem value={10}>lorem</MenuItem>
                                <MenuItem value={20}>lorem</MenuItem>
                                <MenuItem value={30}>lorem</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{
                            "& fieldset": {
                                border: 'none !important',
                                outline: "none",
                            },
                            minWidth: 120,
                        }}>
                            <Select name='country'
                                sx={{
                                    ".MuiSelect-select": {
                                        py: "10px !important"
                                    },
                                    "& svg": {
                                        color: "white"
                                    },
                                    color: 'white',
                                    border: 'none',
                                    outline: 'none',


                                }}
                                IconComponent={() => <ArrowDropDownIcon color="white" style={{ cursor: 'pointer' }} />}
                                value={country}
                                onChange={handleChange2}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">AZ</MenuItem>
                                <MenuItem value={10}>RUS</MenuItem>
                                <MenuItem value={20}>ENG </MenuItem>
                                <MenuItem value={30}>UK</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ bgcolor: '#F4F4F4' }}>
                <Container >
                    <Navigation />
                </Container>
            </Box>
        </Box >
    );
}
