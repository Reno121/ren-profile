import Navbar from "./komponen/navbar";
import Hero from "./komponen/hero";
import Footer from "./komponen/footer";
import Skill from "./komponen/skill";
import DownloadPdf from "./komponen/downloadPdf"
import AnimatedSection from './komponen/AnimatedSection';
import NoRightClickPage from './komponen/NoRightClickPage';

export default function index(){
    return (
        <div>
            <title>Ren Profiles</title>
            <link rel="icon" href="/favicon.ico" />
            <Navbar />
            <NoRightClickPage />
            <Hero />
            <br />
            <AnimatedSection>
            <Skill />
            </AnimatedSection>
            <div className="testing">
                <section id="profile">
                <h1 className="font-bold text-5xl font-mono">Coming Soon</h1>
                <h2><a href="https://www.instagram.com/muhamad_reno1215/">My Instagram Account</a></h2>
                <DownloadPdf />
                <h2 >Powered By Next Js</h2></section>
            </div>
            <br />
            <Footer />
        </div>
    );
};
