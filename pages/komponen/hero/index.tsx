import Link from "next/link"
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

export default function Hero() {
  return (
    <section id="home"><div className="hro bg-gradient-to-r from-fuchsia-600 to-purple-800 shadow-2xl">
      <div className="text-hro">  
      <Typed strings= {["Halo I'm Rehan", "UI/UX", "RenPy Dev"]} typeSpeed={40} backSpeed={20} loop={true} />
      </div>
        
        </div></section>
            /*<section id="home">
            <div className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold line-1 anim-typewriter min-[280px]:text-2xl min-[425px]:text-3xl min-[1024px]:text-5xl">Hallo Saya Rehan()</h1>
                <p className="py-6">Saya adalah WebDev Front End Dan Juga Back End, Saya juga bisa Networking Enginering</p>
                <button className="btn btn-primary opacity-80 transition ease-out hover:scale-110 hover:bg-violet-600 duration-200">Contact Now</button>
                </div>
            </div>
        </div></section>*/
  )
}
