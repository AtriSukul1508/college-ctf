import React, {useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from '../Logo';
import {Link} from 'react-router-dom';
import '../../styles/headerstyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import drawerlogo from '../../assets/output-onlinepngtools.png'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import { Logout } from '@mui/icons-material'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

// import '../../styles/headerstyles.css'
const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleLogout = () => {
      setOpen(true);
  }
  const handlePermission = () => {
    setOpen(false);
    logout();
}
const handleClose = () => {
    setOpen(false);
}

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const drawer = (
      <Box className="Drawer" onClick={handleDrawerOpen} sx={{textAlign: 'center', width:"100%", height:"100%"}}>
          <img src={drawerlogo} alt="drawerlogo"/>
          <Typography color='black' variant='h6' component="div" sx={{flexGrow : 1, my:2 } }>
            Slay
          </Typography>
          <Divider></Divider>
            <ul className='drawer-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li >
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li>
                <Link to={'/events'}>Events</Link>
              </li>
              <li>
                <Link to={'/challenges'}>Challenges</Link>
              </li>
               <li>
                <Link to={'/members'}>Members</Link>
              </li>
              {user? (<div className='profile_name'>
                        <p>{user.user.name}</p>
                        <button onClick={handleLogout} className='logout__btn' ><Logout fontSize='small' /> LogOut</button>
              </div>) :
              (<li>
                <Link to={'/login'}>Login</Link>
              </li>)}
            </ul>
      </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={ {bgcolor: "#ff004e"}}>
        <Toolbar>
          <IconButton color='black' 
          aria-label="open drawer" 
          edge="start" 
          sx={{mr: 2, 
          display: {sm: "none"}
          }}
          onClick={handleDrawerOpen}
          >

            <MenuIcon></MenuIcon>
          </IconButton>
        <Logo></Logo>
        <Typography color='black' variant='h5' component="div" sx={{flexGrow : 1} }>
        <Link to={'/'} style={{color: 'black', textDecoration:"none", fontFamily:"fantasy"}}>Slay</Link>
        </Typography>
        <Box sx={{display: {xs:'none',sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/events'}>Events</Link>
              </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/members'}>Members</Link>
            </li>
            <li>
                <Link to={'/challenges'}>Challenges</Link>
              </li>
              {user? (<div className='profile_name'>
                        <p>{user.user.name}</p>
                        <button onClick={handleLogout} className='logout__btn' ><Logout fontSize='small' /> LogOut</button>
              </div>) :
              (<li>
                <Link to={'/login'}>Login</Link>
              </li>)}
              <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={{ color: '#2d2c39', fontFamily: 'Poppins' }}>
                                Are you sure, you want to log out?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>Cancel</Button>
                            <Button onClick={handlePermission} style={{ color: '#e04e4e' }}>Logout</Button>
                        </DialogActions>
                    </Dialog>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer varient='temporary' open={drawerOpen} 
        onClose={handleDrawerOpen}
        sx={{display:{sx: "block", sm:"none"}, "& .MuiDrawer-paper": {
          boxsizing: "border-box",
          width: "240px",
        },
        }}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
    </>
  )
}

export default Header
