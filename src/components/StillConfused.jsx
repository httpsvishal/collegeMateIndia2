import Lottie from "lottie-react";
import confused from "../assets/confused.json";
import { Button, Label, TextInput } from "flowbite-react";

const StillConfused = () => {
    return (
        <div className="still-confused grid sm:grid-cols-5">
            <div className="col-span-2">
                <Lottie animationData={confused} />
            </div>
            <div className="still-confused__container flex justify-center items-center col-span-3">
                <div>
                <h2 className="still-confused__heading text-3xl font-semibold my-14">Still Confused?</h2>
                <p className="still-confused__text">We are here to help you. Call us at <a href="tel:+919999999999" className="still-confused__link">+91 9999999999</a></p>
                </div>
            </div>
        </div>
    )
};

export default StillConfused;