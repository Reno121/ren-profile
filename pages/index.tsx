import Navbar from "./komponen/navbar";
import Hero from "./komponen/hero";
import Footer from "./komponen/footer";
import Profile from "./komponen/profile";

export default function index(){
    return (
        <div>
            <title>Ren Profiles</title>
            <link rel="icon" href="/favicon.ico" />
            <Navbar />
            <Hero />
            <br />
            <Profile />
            <section id="profile">
            <h1 className="font-bold text-center text-5xl font-mono pt-10">Coming Soon</h1>
            <h2><a href="https://www.instagram.com/muhamad_reno1215/">My Instagram Account</a></h2>
            <h2 >Powered By Next Js</h2></section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid soluta temporibus inventore hic pariatur nihil? Quasi ratione eum ab dicta exercitationem optio, sit consequuntur voluptatibus libero, laboriosam, autem possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid soluta temporibus inventore hic pariatur nihil? Quasi ratione eum ab dicta exercitationem optio, sit consequuntur voluptatibus libero, laboriosam, autem possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid soluta temporibus inventore hic pariatur nihil? Quasi ratione eum ab dicta exercitationem optio, sit consequuntur voluptatibus libero, laboriosam, autem possimus.</p>
            <Footer />
        </div>
    );
};
