import * as React from 'react';
import { Divider, IconButton, InputBase, Paper, Typography , useMediaQuery } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import girl from "../assets/girlanimation.json";
import Lottie from "lottie-react";

const Hero = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div className="hero">
            <div className="hero__content  grid grid-cols-1 md:grid-cols-5 p-2 md:p-5">
                <div className="heroimg md:col-span-2">
                    <Lottie animationData={girl} />
                </div>
                <div className="hero-discription md:col-span-3 flex flex-col justify-center items-center">
                    {/* <div>
                        <img src={logo} alt="" className="h-20 " />
                    </div> */}
                    <div className="flex flex-col justify-center p-5 items-center">
                        <p className="mt-4 text-2xl font-normal mb-10"><span className="text-5xl mb-5 highlighted font-semibold">Your trusted partner </span> <br /> for seamless college admissions across India.</p>
                        <p className="mt-2 text-lg mb-10 font-normal"><span className="text-2xl">"</span>We connect you with top colleges and programs nationwide, guiding you to 
                        the best educational opportunities for your goals.<span className="text-2xl">"</span></p>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: isSmallScreen ? 400 : 600 }}
                        >
                            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Find your ideal college..."
                                inputProps={{ 'aria-label': "Find your ideal college" }}
                            />
                            <IconButton type="button" sx={{ p: '10px',color:"#0E7490" }} aria-label="search">
                                <SearchIcon />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <Typography sx={{ ml: 1, alignSelf: 'center' }}>
                                Search
                            </Typography>
                            </IconButton>
                            {/* <Divider sx={{ height: 28, m: 0.5, color:"#0E7490" }} orientation="vertical" /> */}
                            {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                <DirectionsIcon />
                            </IconButton> */}
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;