import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div >
            <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between" }}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4 ' >
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='' alt=''/>
                        <div className='space-y-2 ml-5'>
                            <p>Men Style Color Dress</p>
                            <p className='space-x-5'><span>Color:Pink</span><span>Size: M</span></p>
                            <p>Seller: Lineria</p>
                            <p>₹1999</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fonstSize:"2rem"}}  className='px-2 '/>
                        <span>Rate & Review Product</span>
                    </Box>

                </Grid>

            </Grid>)}

        </Grid>
    </div>
  )
}

export default OrderDetails
