import React, { Fragment } from 'react'
import { Container, Grid, Typography, Divider, Stack, Box } from "@mui/material"
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import styles from './index.module.css'
import services from '../../mockData/services';
import { Link, useParams } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { reasons } from './reasons';

const ServicesSingle = () => {
    const { slug } = useParams()
    const service = services.find(service => service.slug === slug)

    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ width: '100%', maxWidth: '100%' }}>
                        <MenuList subheader={
                            <Paper className={styles.subheader} sx={{
                                bgcolor: "primary.main", color: 'info.main', p: 3, mb: 2
                            }}>
                                Xidmətlər və Həllər
                            </Paper>
                        }>
                            {services.map(({ id, title, slug }, index) => {
                                return (
                                    <Fragment key={id}>
                                        <Link to={`/services/${slug}`} style={{
                                            textDecoration: 'none',
                                            color: '#435072',
                                            py: 1
                                        }}>
                                            <MenuItem sx={{
                                                textWrap: 'wrap', px: 3, py: 1
                                            }}
                                                disableRipple
                                                disableTouchRipple>

                                                <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
                                            </MenuItem>
                                        </Link>
                                        {index !== services.length - 1 && <Divider variant='middle' />}
                                    </Fragment>
                                )
                            })}
                        </MenuList>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack spacing={3}>
                        <Typography variant="h5" color="primary" component='h5'>
                            {service.title}
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam ac, massa nec pulvinar nunc, nulla a sed.
                            Sapien massa lacus, mi, egestas metus, vitae non metus.
                            Cras lorem quisque in iaculis tortor pharetra est dolor.
                            Enim ipsum hac pulvinar dolor.
                            Congue ut viverra id sagittis vulputate sed posuere.
                        </Typography>
                        <Box>
                            <img src={service.image} alt={service.title} width={'100%'} />
                        </Box>
                        <Typography color="primary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Elit id urna ultricies consectetur cursus. Urna, cursus p
                            haretra quam pretium tincidunt a praesent. Risus in in consequat
                            lobortis consectetur. Cum amet sit netus auctor eu posuere.
                            Duis sit mattis cras sagittis, consectetur suscipit sapien imperdiet
                            . Non, ultricies semper magna sit auctor donec eu.
                            Etiam tortor est cum gravida facilisi pretium dui, massa volutpat.
                            Diam erat mattis fringilla quis bibendum adipiscing viverra.
                            Et dolor elementum et, venenatis eu enim.
                            Maecenas et lectus lacus amet arcu senectus.
                            Tristique blandit vulputate ante odio neque consectetur dictumst et imperdiet.
                            Venenatis ut dui nec nulla elementum enim id sollicitudin sed. Felis eget leo, nisl, magna eget.
                            Nunc neque netus tincidunt donec aliquet vel bibendum cras fringilla.
                            Laoreet elementum, ut blandit id malesuada tincidunt risus lacus ipsum.
                            Auctor aliquam proin euismod auctor morbi velit volutpat scelerisque.
                        </Typography>
                        <Box>
                            <Typography variant="h5" color="primary" component='h5' sx={{ mb: 2 }}>
                                Nə üçün biz?
                            </Typography>
                            <Stack spacing={1}>
                                {reasons.map(({ id, reason }) => {
                                    return <Box className={styles.questionBox} key={id}>
                                        <Box className={styles.iconBox}>
                                            <CheckRoundedIcon />
                                        </Box>
                                        <Typography variant="body1" color="primary">
                                            {reason}
                                        </Typography>
                                    </Box>
                                })}
                            </Stack>
                        </Box>
                        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent={'space-between'}>
                            <Box className={styles.imageBox}>
                                <img src="/ServicesSources/avadanliqlarin-vaxtinda-deyisdirilmesi.svg" alt="avadanliqlarin-vaxtinda-deyisdirilmesi" width='100%' />
                            </Box>
                            <Box className={styles.imageBox}>
                                <img src="/ServicesSources/helpdesk-xidmetler.svg" alt="helpdesk-xidmetler" width='100%' />
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container >

    )
}

export default ServicesSingle