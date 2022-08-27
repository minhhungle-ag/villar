import MenuIcon from '@mui/icons-material/Menu'
import { alpha, Avatar, Box, Container, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import PropTypes from 'prop-types'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
Header.propType = {
  onDrawerToggle: PropTypes.func,
}

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

export default function Header({ onDrawerToggle }) {
  return (
    <AppBar position="sticky" color="inherit">
      <Container>
        <Toolbar disableGutters component="nav">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { md: 'none' },
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: '4px',
              color: 'primary.main',
              ml: 0,
            }}
            onClick={() => onDrawerToggle?.()}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { md: 'none' }, flexGrow: 1 }} />

          <Box component="div" sx={{ py: 1 }}>
            <Box
              width="100%"
              height="100%"
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/624bbacbfc9297b78e31f033_logo.png"
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            component="ul"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              listStyleType: 'none',
            }}
          >
            {menuList.map((item, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{
                  '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                  },

                  '.active': {
                    color: 'primary.main',
                  },
                }}
              >
                <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
                  <Button
                    color="inherit"
                    sx={{
                      textTransform: 'none',
                    }}
                  >
                    {item.label}
                  </Button>
                </NavLink>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
