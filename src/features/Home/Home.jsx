import { Box } from '@mui/material'
import React from 'react'
import Banner from '../../components/common/Banner'
import FeatureProperties from './components/FeatureProperties'
import PopularProperties from './components/PopularProperties'
import WhyUs from './components/WhyUs'

const productList = [
  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },

  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },

  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },
  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },
  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },
  {
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/622596ceb2da993727fc3dbe/6225dd4eb2da993199fe0d98_properties7.jpg',
    title: 'Sinomen plant Palace.',
    address: '253 Montril Street, New York',
    createdAt: 'March 8, 2022',
    price: 155200,
    info: '1450 Sq.fit 3 Bed 2 Bath 1 Garage',
  },
]

function Home(props) {
  return (
    <Box>
      <Banner />

      <PopularProperties productList={productList} />

      <WhyUs />

      <FeatureProperties productList={productList} />
    </Box>
  )
}

export default Home
