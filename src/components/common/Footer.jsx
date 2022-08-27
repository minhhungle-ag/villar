import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer(props) {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ECFAF7',
        height: 500,
      }}
    >
      <Stack
        sx={{
          height: '100%',
          backgroundImage:
            'url("https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622db7630b1cbfb3972bdefb_pattern.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box sx={{ flexGrow: 1 }}></Box>

        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 3 }}>
          <Typography variant="body1">{`${new Date().getFullYear()}. Power by Minh Hung Le`}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
