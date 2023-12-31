import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useState } from 'react';
import NavItem from './NavItem';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import DropdownItem from './DropdownItem';
import styles from './index.module.css'
import { sections } from './sections';

export default function Navigation() {
    const [toggle, setToggle] = useState(false)
    function toggleBtn() {
        setToggle(!toggle)
    }

    return (
        <Box className={styles.navContainer} >
            <Box>
                <img src="/netProIcons/netProIcon2.png" alt="Net Pro Icon" />
            </Box>
            <MenuList className={styles.dropdown} >
                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ position: 'relative', zIndex: 100 }}>
                    {
                        sections.map(({ route, subRoutes, to }, index) => {
                            return (
                                <NavItem
                                    to={to}
                                    key={index}
                                    styles={styles}
                                    section={route}
                                    subRoutes={subRoutes}
                                />
                            )
                        })
                    }
                </Stack>
            </MenuList>
            <ButtonGroup variant="text" aria-label="outlined primary button group">
                <IconButton size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <IconButton className={styles.dropBtn}
                    aria-label="menu"
                    size="large"
                    color='primary'
                    onClick={toggleBtn}
                    sx={{
                        display: 'none', position: 'relative'
                    }} >
                    <MenuIcon fontSize="inherit" />
                    {toggle ? <Paper className={styles.menu}
                        sx={{
                            width: 320, position: 'absolute', right: 50, top: 20, zIndex: 200
                        }}>
                        <MenuList>
                            {sections.map(({ route, subRoutes, to }, index) => {
                                return (
                                    <DropdownItem
                                        to={to}
                                        key={index}
                                        section={route}
                                        subRoutes={subRoutes}
                                    />
                                )
                            })}
                        </MenuList>
                    </Paper> : null}
                </IconButton>

            </ButtonGroup>
        </Box>

    )
}
