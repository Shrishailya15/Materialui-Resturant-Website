import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contacts = () => {
  return (
    <Layout>
      <Box sx={{
        my: 10,
        ml: 10,
        "& h4": { fontWeight: 'bold', mb: 2 },
        "@media (max-width: 600px)": {
          margin: "auto",
          textAlign: "justify",
          padding: "10px"
        }
      }}>

        <Typography variant='h4' sx={{mt:"15px"}}>Contact My Resturant </Typography>
        <p>Get in touch with us for reservations, special events, or inquiries. Our friendly team is always ready to assist you. Reach us via phone, email, or visit us directly at our restaurant. We look forward to welcoming you and ensuring you have a fantastic dining experience with us!</p>

      </Box>

      <Box sx={{
        m: 3,
        width: "600px",
        ml: 10,
        "@media (max-width: 600px)": {
          width: "90%",
          margin: "auto",
          mt: 5
        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000(torollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contacts
