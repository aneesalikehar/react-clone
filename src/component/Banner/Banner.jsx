import React from 'react'
import './banner.css';
import MobileScreenone from '../../assets/Mobile Screenone.png'
import MobileScreentwo from '../../assets/Mobile Screentwo.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Banner() {
  return (
    <div className='mainbanner'>
      <div className='leftsec'>
        <div className='leftimg'><img src={MobileScreenone} alt="" /></div>
      </div>
      <div className='center'>
      <div className='head'>
            <h1>Compare price for over 5 million product sold online</h1>
</div>
        <div className='searchbar'><input type="text" name="" placeholder='Search for a product, gitin brand or category' />
       < ArrowCircleRightOutlinedIcon className='arrowicon' /></div>
        <button className='bannerbtn'>Search</button>
        <p className='bannerpara'>Price Comparison help you save 100s of pounds on online shoping
            start by searching for the product you want to buy and see whats the cheapest price available online
        </p>
      </div>
      <div></div>
      <div className='rightsec'>
        <div className='rightimg'><img src={MobileScreentwo} alt="" /></div>
      </div>
    </div>
  )
}

export default Banner
