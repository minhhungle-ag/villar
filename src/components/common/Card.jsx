import React from 'react'
import PropTypes from 'prop-types'
import { alpha, Box, Divider, Stack, Typography } from '@mui/material'

Card.propTypes = {
  product: PropTypes.object,
}

function Card({ product }) {
  return (
    <Box sx={{ width: '100%' }} boxShadow={1}>
      <Box>
        <Box sx={{ position: 'relative', height: 0, paddingTop: '56.25%' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
            component="img"
            src={product.thumbnailUrl}
          />
        </Box>

        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: 2 }}>
          <Typography variant="h5">{product.title}</Typography>

          <Typography variant="body1" sx={{ textDecoration: 'underline' }}>
            {product.address}
          </Typography>

          <Typography variant="body1">Added: {product.createdAt}</Typography>

          <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
            <Box
              sx={{
                flexGrow: 1,
                width: 'auto',
                height: '1px',
                bgcolor: (theme) => alpha(theme.palette.common.black, 0.1),
              }}
            />
            <Typography variant="h5" color="primary" sx={{ px: 1 }}>
              Price: ${product.price}
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                width: 'auto',
                height: '1px',
                bgcolor: (theme) => alpha(theme.palette.common.black, 0.1),
              }}
            />
          </Stack>

          <Typography variant="body1">{product.info}</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default Card
