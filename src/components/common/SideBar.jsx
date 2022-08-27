import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'

const drawerWidth = '70%'
const menuList = [
  {
    label: 'Home',
    link: '/home',
  },
  {
    label: 'Properties',
    link: '/properties',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
]

SideBar.propTypes = {
  open: PropTypes.bool,
  onDrawerToggle: PropTypes.func,
}

function SideBar({ open, onDrawerToggle }) {
  const drawer = (
    <Box onClick={() => onDrawerToggle?.()} sx={{ textAlign: 'center' }}>
      <Stack direction="row" justifyContent="center">
        <Link to="/">
          <Box sx={{ width: 170, height: 50, m: 1 }}>
            <Box
              width="100%"
              height="100%"
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/624bbacbfc9297b78e31f033_logo.png"
            />
          </Box>
        </Link>
      </Stack>
      <Divider />

      <List>
        {menuList.map((item, idx) => (
          <ListItem
            key={idx}
            disablePadding
            sx={{
              '& a': {
                width: '100%',
                color: 'inherit',
                textDecoration: 'none',
              },

              '.active': {
                color: 'primary.main',
              },
            }}
          >
            <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={() => onDrawerToggle?.()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default SideBar
