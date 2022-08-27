import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

const reasonList = [
  {
    title: 'Budget Friendly',
    desc: 'Properties are most budget friendly so you have opportunity to find the best one',
    icon: 'https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622717c5735aef1c45491454_about-icon.svg',
  },
  {
    title: 'Prime Location',
    desc: 'Properties are most budget friendly so you have opportunity to find the best one',
    icon: 'https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622717c4a324803bbe861cc6_about-icon-2.svg',
  },
  {
    title: 'Trusted By Thousand',
    desc: 'Properties are most budget friendly so you have opportunity to find the best one',
    icon: 'https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622717c5735aef1c45491454_about-icon.svg',
  },
]

function WhyUs(props) {
  return (
    <Box sx={{ my: 15 }}>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: 1 / 2 }, p: 2 }}>
            <Box
              sx={{ width: '100%' }}
              component="img"
              src="https://uploads-ssl.webflow.com/6224513e7396e88bd7269d7b/622713061355ef1538809049_about.png"
            ></Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 1 / 2 }, p: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" color="secondary">
                Why Choose us
              </Typography>

              <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                We Provide Right Choice of Properties that You need.
              </Typography>

              <Typography variant="body1">
                Huge number of propreties availabe here for buy, sell and Rent. Also you find here
                co-living property so lots opportunity you have to choose here and enjoy huge
                discount
              </Typography>
            </Box>

            <Stack spacing={3}>
              {reasonList.map((item, idx) => (
                <Stack direction="row" alignItems="flex-start" key={idx} spacing={2}>
                  <Box>
                    <Box sx={{ width: '100%' }} component="img" src={item.icon}></Box>
                  </Box>

                  <Box>
                    <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>

                    <Typography variant="body1">{item.desc}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default WhyUs
