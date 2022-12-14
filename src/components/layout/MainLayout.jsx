import Box from '@mui/material/Box'
import * as React from 'react'
import Header from '../common/Header'
import SideBar from '../common/SideBar'

import { alpha, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import Footer from '../common/Footer'

MainLayout.propTypes = {
  children: PropTypes.node,
}

function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Header onDrawerToggle={handleDrawerToggle} />

      <SideBar onDrawerToggle={handleDrawerToggle} open={mobileOpen} />

      <Box component="main">{children}</Box>

      <Footer />
    </Box>
  )
}

export default MainLayout
