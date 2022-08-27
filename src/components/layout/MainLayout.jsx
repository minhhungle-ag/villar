import Box from '@mui/material/Box'
import * as React from 'react'
import Header from '../common/Header'
import SideBar from '../common/SideBar'

import PropTypes from 'prop-types'
import { Divider, Stack, Typography } from '@mui/material'

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
      <Divider />
      <Box component="footer">
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 3 }}>
          <Typography variant="body1">{`${new Date().getFullYear()}. Power by Minh Hung Le`}</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default MainLayout
