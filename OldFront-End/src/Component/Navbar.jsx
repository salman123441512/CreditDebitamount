import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'ContactUs'];
const loginPage = 'LogIn';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0">
                <div className="row g-0 d-none d-lg-flex">
                    <div className="col-lg-6 ps-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center text-white">
                            <span>Follow us.</span>
                            <a className="btn btn-link text-light" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-link text-light" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-link text-light" href="#"><i className="bi bi-linkedin"></i></a>
                            <a className="btn btn-link text-light" href="#"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                            <span className="fs-5 fw-bold me-2"><i className="bi bi-telephone-fill me-2"></i>Call Us:</span>
                            <span className="fs-5 fw-bold"><a href="tel:+91 9756053579" className="text-light text-decoration-none">+91 9756053579</a></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            <AppBar position="static" sx={{ paddingTop: '15px', textAlign: 'center', backgroundColor: '#003399' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/Home"  // Ensure this path is correct and consistent
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src="assets/image/Br.png" height="90px" alt="brand" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="open navigation menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${page}`}>
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to="/Home"  // Ensure this path is correct and consistent
                            sx={{
                                mr: 0,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src="assets/image/Br.png" height="90px" alt="brand" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={Link}
                                    to={`/${page}`}  // Ensure there are no trailing slashes in `to`
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', border: '2px solid white', borderRadius: '5px' }}>
                            <Button
                                color="inherit"
                                component={Link}
                                to={`/${loginPage}`}  // Ensure this path is correct and consistent
                                sx={{ textDecoration: 'none', color: 'white' }}
                            >
                                LogIn
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Navbar;
