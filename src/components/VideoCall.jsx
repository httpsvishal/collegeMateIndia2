import Lottie from "lottie-react";
import videoCall from "../assets/videocall.json";
import * as React from 'react';
import Button from '@mui/material/Button';

const VideoCall = () => {
    return (
        <div className="videoCall">
            <div className="videoCall__content flex items-center grid sm:grid-cols-5 p-2 sm:p-5 justify-around">
                <div className="videoCallimg col-span-2">
                    <Lottie animationData={videoCall} />
                </div>
                <div className="videoCall-discription sm:col-span-3 p-10 flex flex-col items-center">
                    <div>
                        <h1 className="text-3xl font-semibold">Book a Video Call</h1>
                        <p className="my-2 text-lg">Book a video call with our expert for personalized guidance. Let us help you navigate your educational journey with 
                            confidence.</p>
                        <p className="my-4 mb-14 text-base font-normal">You can schedule a video call with one of our experts to receive personalized guidance tailored to your 
                            academic and career goals. Whether you need help choosing the right college, understanding admission requirements, or exploring career options, 
                            our experienced counselors are here to support you every step of the way. Book your session today and take the first step towards a brighter 
                            future.
                        </p>
                        <Button variant="outlined" className="mt-14" color="black">Book a Video Call</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoCall;