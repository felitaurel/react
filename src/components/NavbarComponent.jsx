import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import sneakers from './sneakers.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SvgIcon } from '@mui/material';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

{/*aishdashjdajhsd TEST Navbar sacado de Material ui, edite detalles relevantes y separe el cartwidjet*/}

const pages = ['urbano', 'running', 'accesorios'];


function NavbarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#1a1a1a'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
          <img src={sneakers} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/*Edite la imagen y texto*/}
          <Typography
            variant="h6"
            noWrap
            component= "p" /*deberia cambiar "a" a "Link", y "href" a "to", es un metodo de react router dom, despues checkear si funciona */
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Sneakers
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link //Deberia cambiar este Button a <Link component = {RouterLink} to ='/'> y en el to ver como se aplicaria? ej to='category/running'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, px: 2, color: 'white', display: 'block' }}
                to={`category/${page}`}
              >
                {page}
                
              </Link>
            ))} 
          </Box>
          <CartWidget />
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarComponent;
