import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Stack } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

const DropdownContent = () => {
    const [money, setMoney] = React.useState('');
    const [country, setCountry] = React.useState('');

    const handleChange = (e) => {
        setMoney(e.target.value);
    };
    const handleChange2 = (e) => {
        setCountry(e.target.value);
    };
    return (
        <div>
            <Box>
                <a href="https://go.2gis.com/0e49l" style={{ color:'#435072',textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ marginRight: 1 }} />
                    Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
                </a>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    < WhatsAppIcon sx={{ marginRight: 1 }} />
                    <a href="tel:+994505754080" style={{ color:'#435072',textDecoration: 'none', marginRight: 10 }}>+994505754080</a>
                    <a href="tel:+994505754070" style={{ color:'#435072',textDecoration: 'none' }}>+994505754070</a>
                </Box>
            </Box>
            <Box>
                <a href="mailto:info@netprogroup.az" style={{ color:'#435072',textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    < MailIcon sx={{ marginRight: 1 }} />
                    info@netprogroup.az
                </a>
            </Box>
            <Stack gap={0.7} flexDirection="row" justifyContent={'center'} sx={{ m: 1 }}>
                <a href="https://www.facebook.com/?locale=az_AZ" style={{ color:'#435072',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FacebookIcon sx={{ border: '1px solid #435072', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                </a>
                <a href="https://www.linkedin.com/in/leman-gahramanova-3871a42a7/" style={{ color:'#435072',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LinkedInIcon sx={{ border: '1px solid #435072', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                </a>
                <a href="" style={{ color:'#435072',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <InstagramIcon sx={{ border: '1px solid #435072', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                </a>
                <a href="" style={{ color:'#435072',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <WhatsAppIcon sx={{ border: '1px solid #435072', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                </a>
            </Stack>
            <FormControl sx={{
                minWidth: 120, "& fieldset": {
                    border: '1px solid #435072 !important',
                    outline: "none",
                },
            }}>
                <Select name='value'
                    sx={{
                        ".MuiSelect-select": {
                            py: "10px !important",
                        },
                        "& svg": {
                            color: "#435072"
                        },
                        color: '#435072',
                        border: 'none',
                        outline: 'none',
                        margin: '0 0.5rem'

                    }}
                    value={money}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent={() => <ArrowDownward color="#435072" style={{ cursor: 'pointer', position: 'relative', right: 5 }} />}
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
                            color: "#435072"
                        },
                        color: '#435072',
                        border: 'none',
                        outline: 'none',
                    }}
                    IconComponent={() => <ArrowDropDownIcon color="#435072" style={{ cursor: 'pointer' }} />}
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
        </div>
    )
}

export default DropdownContent