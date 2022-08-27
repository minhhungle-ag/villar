import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/material'

NotFound.propTypes = {}

function NotFound(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        height: '100vh',
        width: '100%',
        bgcolor: (theme) => theme.palette.common.white,
      }}
    >
      <Typography variant="h6">Error 404 | Not found this page!</Typography>
    </Stack>
  )
}

export default NotFound
