import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

Banner.propTypes = {}

function Banner(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 15,
        bgcolor: '#fff6f0',
      }}
    >
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: { xs: '100%', md: 1 / 2 }, p: 2 }}
          >
            <Stack spacing={4}>
              <Stack direction="row" alignItems="center" position="relative">
                <Box
                  component="img"
                  src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622583405671972ffe53fedc_spinin-image.png"
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 'auto',
                    bottom: 'auto',
                    left: 25,
                    color: 'secondary.main',
                  }}
                >
                  A new way to find Properties
                </Box>
              </Stack>

              <Box>
                <Typography variant="h2" fontWeight="bold" color="primary">
                  Find your Most Suitable Property
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2">
                  Huge number of propreties availabe here for buy, and sell, also you can find here
                  co-living property, So you have lots of opportunity.
                </Typography>
              </Box>

              <Box>
                <Button size="large" variant="contained">
                  Contact us!
                </Button>
              </Box>

              <Box>
                <Typography variant="h6" color="secondary">
                  Have a question?{' '}
                  <Box
                    component="a"
                    href="tel:+0123 456 789"
                    sx={{ color: 'primary.main', textDecoration: 'none' }}
                  >
                    +0123 456 789
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Box sx={{ position: 'relative', width: { xs: '100%', md: 1 / 2 }, p: 2 }}>
            <Box
              sx={{
                width: '100%',
              }}
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622495d2dd39aff8c5b4a76e_hero-image.png"
            />

            <Box
              sx={{ position: 'absolute', top: '12%', left: '-2%', zIndex: 1 }}
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/62249d6de2f1f8a4dcb8301b_small-image-one.png"
            />
            <Box
              sx={{ position: 'absolute', bottom: '17%', right: '17%', zIndex: 1 }}
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/62249d64acea247a8cedba2e_small-image-two.png"
            />
            <Box
              sx={{ position: 'absolute', bottom: 60, left: 35, zIndex: 1 }}
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/62249d63fbfee674432551cf_small-image-three.png"
            />
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{ position: 'absolute', bottom: 10, left: 0, zIndex: 1 }}
        component="img"
        src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622eb8abe78c33eaaa83e978_small-image-four.png"
      />
    </Box>
  )
}

export default Banner
