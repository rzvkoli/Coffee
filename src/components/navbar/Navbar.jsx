import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../style/Toasts.css';
import '../style/Navbar.css';

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const aboutMessage = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      iconColor: '#3a5a40',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'This page is being launched',
      customClass: {
        popup: 'rounded-none colored-toast',
        title: 'text-3a5a40 font-Urbanist uppercase',
        timerProgressBar: 'bg-3a5a40',
      },
    })
  }

  const contactMessage = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      iconColor: '#3a5a40',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'This page is being launched',
      customClass: {
        popup: 'rounded-none colored-toast',
        title: 'text-3a5a40 font-Urbanist uppercase',
        timerProgressBar: 'bg-3a5a40',
      },
    })
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className='!bg-A4C3B2 !shadow px-5'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
            className='!font-Urbanist !uppercase !text-3a5a40 !text-3xl'
          >
            coffee
          </Typography>

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
              className='font-Urbanist uppercase'
            >
              <MenuItem onClick={handleCloseNavMenu} className='!text-white'>
                <Link to={'/'} className='font-Urbanist uppercase' >
                  home
                </Link>    
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className='!text-white'>
                <Link to={'/Menu'} className='font-Urbanist uppercase' >
                  menu
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className='!text-white'>
                <Link onClick={aboutMessage} className='font-Urbanist uppercase' >
                  about
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className='!text-white'>
                <Link onClick={contactMessage} className='font-Urbanist uppercase' >
                  contact
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box
          className='flex flex-row justify-start items-center gap-8 font-Urbanist uppercase text-xl !text-white' 
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to={'/'} className='hover:text-CCE3DE' >
                home
              </Link>
              <Link to={'/Menu'} className='hover:text-CCE3DE' >
                menu
              </Link>
              <Link className='hover:text-CCE3DE' onClick={aboutMessage}>
                about
              </Link>
              <Link className='hover:text-CCE3DE' onClick={contactMessage}>
                contact
              </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;