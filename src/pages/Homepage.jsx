import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyCollege from "../components/whyCollege.jsx";
import Courses from "../components/Courses.jsx";
import VideoCall from "../components/VideoCall.jsx";
import TopColleges from "../components/TopColleges.jsx";
import StillConfused from "../components/StillConfused.jsx";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyCollege />
            <Courses />
            <VideoCall />
            <TopColleges />
            <StillConfused />
        </>
    );
}

export default Homepage;