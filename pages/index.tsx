import Navbar from "./komponen/navbar";
import Hero from "./komponen/hero";
export default function index (){
    return (
        <div className="scroll-smooth">
            <title>Ren Profiles</title>
            <link rel="icon" href="/favicon.ico" />
            <Navbar />
            <Hero />
            <br />
            <h1 className="font-bold text-center text-5xl font-mono pt-10">Coming Soon</h1>
            <h2><a href="https://www.instagram.com/muhamad_reno1215/">My Instagram Account</a></h2>
            <h2>Powered By Next Js</h2>
        </div>
    );
};
