import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Stack, Typography } from '@mui/material'
import Card from '../../../components/common/Card'

PopularProperties.propTypes = {
  productList: PropTypes.array,
}

function PopularProperties({ productList }) {
  return (
    <Box sx={{ my: 15 }}>
      <Container>
        <Box>
          <Typography variant="body1" color="secondary">
            Best Choice
          </Typography>
          <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
            Popular properties.
          </Typography>

          <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
            {productList
              .filter((item, idx) => idx < 3)
              .map((item, idx) => (
                <Box sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 } }}>
                  <Box sx={{ p: 2 }}>
                    <Card product={item} />
                  </Box>
                </Box>
              ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default PopularProperties
