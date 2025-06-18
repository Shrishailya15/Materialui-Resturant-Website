import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${Banner})`}}>
           <div className='headerContainer'>
            <h1>Welcome to our WebSite</h1>
            <p>Here you can find the best food in the world</p>
            <Link to="/menu">
              <button>Order Now</button>
            </Link>
           </div>
      </div>
    </Layout>
  )
}

export default Home 
