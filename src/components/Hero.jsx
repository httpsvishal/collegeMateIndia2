import homegirl from "../assets/homegirl.webp";
import logo from "../assets/Logo.png";
import girl from "../assets/girlanimation.json";
import Lottie from "lottie-react";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content flex items-center p-2 justify-around">
                <div className="heroimg">
                    <Lottie animationData={girl} />
                </div>
                <div className="hero-discription flex flex-col items-center font-medium">
                    <div>
                    <img src={logo} alt="" className="h-20 " />
                    </div>
                    <div>
                    <p className="mt-4 text-lg font-normal">Your trusted partner for seamless college admissions across India.</p>
                    <p className="mt-2 text-lg">Connecting you to the best educational opportunities nationwide.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;