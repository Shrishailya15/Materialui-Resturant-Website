import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from './../data/data';

const Menus = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {
        MenuList.map(menu => (
            <Card sx={{maxWidth:345, margin:2 }} key={menu.name}>
              <CardActionArea>
                <CardMedia sx={{height:"400px"}} component={'img'} src={menu.image} alt={menu.name}/>
                <CardContent sx={{textAlign:"justify"}}>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))
        }
      </Box>
    </Layout>
  )
}

export default Menus
