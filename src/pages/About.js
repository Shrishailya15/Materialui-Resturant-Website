import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        padding: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: 'justify',
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          },
        }
      }}>
        <Typography variant='h4'>
          Welocme to my resturant
        </Typography>
        <p>
          Our restaurant offers a delightful dining experience with a diverse menu featuring mouth-watering dishes made from fresh, high-quality ingredients. We pride ourselves on warm hospitality, cozy ambiance, and exceptional service. Whether you're craving traditional favorites or exploring new flavors, our restaurant is the perfect place for memorable meals.
        </p>
        <br />
        <p>
          Welcome to our restaurant, where great food meets warm hospitality. We take pride in serving a variety of delicious dishes prepared with fresh, high-quality ingredients to ensure every bite is bursting with flavor. Our menu offers something for everyone, from traditional favorites to exciting new flavors that cater to diverse tastes. With a cozy ambiance, attentive service, and a commitment to customer satisfaction, we strive to create memorable dining experiences. Whether you're planning a family dinner, a casual meetup with friends, or a special celebration, our restaurant is the perfect destination for unforgettable moments and delightful culinary experiences.
        </p>
      </Box>
    </Layout>
  )
}

export default About
